import { META_PIXEL_ID, REGISTER_URL, SYSTEM_URL } from '$lib/constants';

export { META_PIXEL_ID };

const DEDUPE_MS = 1000;
const recentEvents = new Map<string, number>();

function shouldDedupe(key: string): boolean {
  const now = Date.now();
  const last = recentEvents.get(key) ?? 0;
  if (now - last < DEDUPE_MS) return true;
  recentEvents.set(key, now);
  return false;
}

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

/** content_name from link label / aria-label, with a sensible fallback. */
export function contentNameFromEl(el: Element, fallback: string): string {
  const aria = el.getAttribute('aria-label');
  if (aria && normalizeText(aria)) return normalizeText(aria).slice(0, 100);

  const text = normalizeText(el.textContent ?? '');
  if (text) return text.slice(0, 100);

  return fallback;
}

export function trackMetaEvent(
  eventName: string,
  params: Record<string, unknown> = {},
  dedupeKey?: string
): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;

  const key = dedupeKey ?? `${eventName}:${String(params.content_name ?? '')}`;
  if (shouldDedupe(key)) return;

  const eventId = crypto.randomUUID();
  window.fbq('track', eventName, params, { eventID: eventId });

  // Best-effort CAPI mirror (no-op if token unset server-side)
  fetch('/api/meta-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_data: params
    })
  }).catch(() => {});
}

export function trackPageView(): void {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  // PageView on SPA navigations — do not dedupe against the initial app.html PageView
  // by content; only avoid rapid double-fires on the same path.
  const path = window.location.pathname + window.location.search;
  if (shouldDedupe(`PageView:${path}`)) return;
  window.fbq('track', 'PageView');
}

export function trackLead(contentName: string, dedupeKey?: string): void {
  trackMetaEvent('Lead', { content_name: contentName }, dedupeKey ?? `Lead:${contentName}`);
}

export function trackContact(contentName: string, dedupeKey?: string): void {
  trackMetaEvent('Contact', { content_name: contentName }, dedupeKey ?? `Contact:${contentName}`);
}

function isWhatsAppHref(href: string): boolean {
  return /wa\.me\b|api\.whatsapp\.com/i.test(href);
}

function isAppSignupHref(href: string): boolean {
  try {
    const url = new URL(href, SYSTEM_URL);
    const hostOk =
      url.hostname === 'upclinic-aa025.web.app' ||
      href.startsWith(SYSTEM_URL) ||
      href.startsWith(REGISTER_URL.split('?')[0]);
    if (!hostOk) return false;

    const path = url.pathname.toLowerCase();
    const trial = url.searchParams.get('trial');
    if (trial === 'true') return true;
    if (path.includes('/register')) return true;
    // login?trial=true already handled; bare /login is not a free-trial CTA
    return false;
  } catch {
    return /upclinic-aa025\.web\.app\/(?:register|login\?[^#]*trial=true)/i.test(href);
  }
}

function looksLikeFreeTrialCta(el: Element, href: string): boolean {
  if (isAppSignupHref(href)) return true;
  const label = `${el.getAttribute('aria-label') ?? ''} ${el.textContent ?? ''}`.toLowerCase();
  return /come[cç]ar\s*gr[aá]tis|start\s*free|teste\s*gr[aá]tis|empezar\s*gratis|free\s*trial|7\s*dias/i.test(
    label
  ) && /upclinic-aa025\.web\.app/i.test(href);
}

/**
 * Capture-phase click handler: Lead on free-trial/signup CTAs, Contact on WhatsApp.
 * Safe to install once from the root layout.
 */
export function handleMetaPixelClick(event: MouseEvent): void {
  if (typeof window === 'undefined') return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const anchor = target.closest('a');
  if (!anchor) return;

  const href = anchor.href || anchor.getAttribute('href') || '';
  if (!href || href.startsWith('#')) return;

  if (isWhatsAppHref(href)) {
    const name = contentNameFromEl(anchor, 'WhatsApp');
    trackContact(name, `Contact:${href}`);
    return;
  }

  if (looksLikeFreeTrialCta(anchor, href)) {
    const name = contentNameFromEl(anchor, 'Testar 7 dias grátis');
    trackLead(name, `Lead:${href}`);
    // Google Ads conversion-ready event (importable later as a conversion)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: name,
        value: 1,
        currency: 'BRL'
      });
    }
  }
}

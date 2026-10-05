import { GOOGLE_ADS_PURCHASE_CONVERSION_SEND_TO } from '$lib/constants';
import { trackMetaEvent } from '$lib/metaPixel';

export type PurchaseConversionParams = {
  /** Stripe Checkout Session id (`cs_…`) when present. */
  sessionId?: string;
  /** Monetary value in major units (e.g. 59.9). Only used when parsed from client-safe params. */
  value?: number;
  currency?: string;
};

const SESSION_ID_RE = /^cs_(test_|live_)?[A-Za-z0-9]+$/;

/** Parse optional amount from Stripe redirect / client-safe query params. Never invents amounts. */
export function parseAmountFromSearchParams(params: URLSearchParams): number | undefined {
  const raw =
    params.get('amount_total') ||
    params.get('amount') ||
    params.get('value') ||
    params.get('amount_subtotal');
  if (!raw) return undefined;

  // Stripe amount_total is usually integer cents; allow major-unit decimals too.
  const normalized = raw.trim().replace(',', '.');
  const n = Number(normalized);
  if (!Number.isFinite(n) || n <= 0) return undefined;

  // Heuristic: integer >= 100 with no decimal → treat as cents (Stripe style).
  if (/^\d+$/.test(normalized) && n >= 100) {
    return Math.round(n) / 100;
  }
  return n;
}

export function parseCurrencyFromSearchParams(params: URLSearchParams): string {
  const c = (params.get('currency') || 'BRL').trim().toUpperCase();
  return /^[A-Z]{3}$/.test(c) ? c : 'BRL';
}

export function isStripeSessionId(id: string): boolean {
  return SESSION_ID_RE.test(id);
}

/**
 * Fire purchase conversion events for Ads/Meta after a successful Payment Link redirect.
 * Dedupes once per session_id (or once per page load when no session id).
 */
export function firePurchaseConversion(params: PurchaseConversionParams): boolean {
  if (typeof window === 'undefined') return false;

  const sessionId = (params.sessionId || '').trim();
  const hasSession = sessionId.length > 0 && isStripeSessionId(sessionId);
  const currency = (params.currency || 'BRL').toUpperCase();
  const value = typeof params.value === 'number' && params.value > 0 ? params.value : undefined;

  const dedupeKey = `upclinic_purchase_fired:${hasSession ? sessionId : 'no_session'}`;
  try {
    if (sessionStorage.getItem(dedupeKey) === '1') return true;
  } catch {
    /* ignore */
  }

  const valuePayload: Record<string, unknown> = { currency };
  if (value !== undefined) valuePayload.value = value;

  const tagsReady =
    typeof window.trackPurchaseConversion === 'function' ||
    typeof window.gtag === 'function' ||
    typeof window.fbq === 'function';
  if (!tagsReady) return false;

  // Google Ads “Compra” conversion (AW-17840348694)
  if (typeof window.trackPurchaseConversion === 'function') {
    window.trackPurchaseConversion(hasSession ? sessionId : '');
  } else if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_PURCHASE_CONVERSION_SEND_TO,
      transaction_id: hasSession ? sessionId : '',
      ...(value !== undefined ? { value, currency } : {})
    });
  }

  // GA4 / gtag ecommerce purchase (amount only when known)
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'purchase', {
      transaction_id: hasSession ? sessionId : undefined,
      ...valuePayload
    });
  }

  // Meta Pixel Purchase (Pixel 646948901744249 via app.html)
  trackMetaEvent(
    'Purchase',
    {
      content_name: 'Assinatura UpClinic',
      content_category: 'Subscription',
      ...valuePayload
    },
    hasSession ? `Purchase:${sessionId}` : 'Purchase:obrigado'
  );

  try {
    sessionStorage.setItem(dedupeKey, '1');
  } catch {
    /* ignore */
  }

  return true;
}

/**
 * Fallback when the thank-you page is hit without a Stripe session id
 * (e.g. manual visit). Fires Lead / generate_lead — not Purchase.
 */
export function fireThankYouLeadFallback(): boolean {
  if (typeof window === 'undefined') return false;

  const tagsReady = typeof window.gtag === 'function' || typeof window.fbq === 'function';
  if (!tagsReady) return false;

  const dedupeKey = 'upclinic_obrigado_lead_fired';
  try {
    if (sessionStorage.getItem(dedupeKey) === '1') return true;
    sessionStorage.setItem(dedupeKey, '1');
  } catch {
    /* ignore */
  }

  trackMetaEvent('Lead', { content_name: 'Obrigado — sem session_id' }, 'Lead:obrigado');

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: 'obrigado_sem_session',
      currency: 'BRL'
    });
  }

  return true;
}

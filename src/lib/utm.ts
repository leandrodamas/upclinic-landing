/**
 * First-touch UTM / click-id attribution for the landing site.
 * Stored in localStorage (`uc_utm`, 90 days) and a cookie on `.clinicupapp.com`.
 * Appended to every link that points at the Firebase app (signup/login).
 */

import { SYSTEM_URL } from '$lib/constants';

export const UTM_STORAGE_KEY = 'uc_utm';
export const UTM_COOKIE_NAME = 'uc_utm';
export const UTM_TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days
export const UTM_COOKIE_DOMAIN = '.clinicupapp.com';
export const DEFAULT_UTM_CONTENT = 'sem_codigo';

export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid'
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];

export type UtmParams = Partial<Record<UtmKey, string>>;

export type StoredUtm = {
  params: UtmParams;
  /** Epoch ms when first touch was recorded */
  firstTouchAt: number;
  /** Epoch ms when this record expires */
  expiresAt: number;
  /** @deprecated legacy field from earlier first-touch PR — read as fallback */
  ts?: number;
};

const APP_HOSTS = new Set(['upclinic-aa025.web.app', 'upclinic-aa025.firebaseapp.com']);

function clampValue(value: string): string {
  return value.slice(0, 200);
}

/** Read attribution params from a query string (or URLSearchParams). */
export function readUtmFromSearch(search: string | URLSearchParams): UtmParams {
  const incoming = typeof search === 'string' ? new URLSearchParams(search) : search;
  const params: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = incoming.get(key)?.trim();
    if (value) params[key] = clampValue(value);
  }
  return params;
}

/** Ensure utm_content is always set (default: sem_codigo). */
export function withDefaultUtmContent(params: UtmParams): UtmParams {
  if (!params.utm_content) {
    return { ...params, utm_content: DEFAULT_UTM_CONTENT };
  }
  return params;
}

function firstTouchAtOf(data: { firstTouchAt?: unknown; ts?: unknown }): number | null {
  if (typeof data.firstTouchAt === 'number' && Number.isFinite(data.firstTouchAt)) {
    return data.firstTouchAt;
  }
  if (typeof data.ts === 'number' && Number.isFinite(data.ts)) {
    return data.ts;
  }
  return null;
}

function parseStored(raw: string | null): StoredUtm | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as StoredUtm;
    if (!data || typeof data !== 'object' || typeof data.expiresAt !== 'number') return null;
    if (Date.now() > data.expiresAt) return null;
    if (!data.params || typeof data.params !== 'object') return null;
    const firstTouchAt = firstTouchAtOf(data);
    if (firstTouchAt == null) return null;
    return { params: data.params, firstTouchAt, expiresAt: data.expiresAt };
  } catch {
    return null;
  }
}

function readLocalStorage(): StoredUtm | null {
  if (typeof window === 'undefined') return null;
  try {
    return parseStored(window.localStorage.getItem(UTM_STORAGE_KEY));
  } catch {
    return null;
  }
}

function writeLocalStorage(stored: StoredUtm): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // quota / private mode — ignore
  }
}

function readCookie(): StoredUtm | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${UTM_COOKIE_NAME}=`));
  if (!match) return null;
  const value = match.slice(UTM_COOKIE_NAME.length + 1);
  try {
    return parseStored(decodeURIComponent(value));
  } catch {
    return null;
  }
}

/**
 * Persist first-touch attribution as a cookie on `.clinicupapp.com`.
 * On localhost / non-production hosts, omit Domain so the cookie still works for local QA.
 */
function writeCookie(stored: StoredUtm): void {
  if (typeof document === 'undefined') return;
  const maxAge = Math.max(0, Math.floor((stored.expiresAt - Date.now()) / 1000));
  const encoded = encodeURIComponent(JSON.stringify(stored));
  const parts = [
    `${UTM_COOKIE_NAME}=${encoded}`,
    'Path=/',
    `Max-Age=${maxAge}`,
    'SameSite=Lax'
  ];

  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  if (host === 'clinicupapp.com' || host.endsWith('.clinicupapp.com')) {
    parts.push(`Domain=${UTM_COOKIE_DOMAIN}`);
  }
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    parts.push('Secure');
  }

  document.cookie = parts.join('; ');
}

function persist(stored: StoredUtm): void {
  writeLocalStorage(stored);
  writeCookie(stored);
}

function hasTrackedParams(params: UtmParams): boolean {
  return UTM_KEYS.some((key) => Boolean(params[key]));
}

/**
 * Capture first-touch UTMs from the current URL (if present).
 * Does not overwrite an existing non-expired first-touch record.
 * Returns the effective attribution (stored or newly captured), with utm_content defaulted.
 */
export function captureFirstTouchUtm(search?: string | URLSearchParams): UtmParams {
  const existing = readLocalStorage() ?? readCookie();
  if (existing) {
    const params = withDefaultUtmContent(existing.params);
    // Keep localStorage + cookie in sync for the remaining TTL
    persist({ ...existing, params });
    return params;
  }

  const fromUrl = readUtmFromSearch(
    search ?? (typeof window !== 'undefined' ? window.location.search : '')
  );
  const params = withDefaultUtmContent(fromUrl);

  // Only persist a first-touch when the URL carried attribution (or click ids).
  // Bare visits still get utm_content=sem_codigo on CTAs without locking first-touch.
  if (hasTrackedParams(fromUrl)) {
    const now = Date.now();
    persist({
      params,
      firstTouchAt: now,
      expiresAt: now + UTM_TTL_MS
    });
  }

  return params;
}

/** Read the current first-touch attribution without capturing. */
export function getStoredUtm(): UtmParams | null {
  const existing = readLocalStorage() ?? readCookie();
  if (!existing) return null;
  return withDefaultUtmContent(existing.params);
}

/**
 * Append first-touch UTM / click-id params onto a destination URL
 * (typically the app login/register link).
 */
export function appendUtmToUrl(baseUrl: string, params: UtmParams): string {
  const target = new URL(baseUrl);
  const withContent = withDefaultUtmContent(params);
  for (const key of UTM_KEYS) {
    const value = withContent[key];
    if (value) target.searchParams.set(key, value);
  }
  return target.toString();
}

/** True when href points at the Firebase app (signup/login host). */
export function isAppUrl(href: string | null | undefined): boolean {
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return false;
  }
  try {
    const url = new URL(href, typeof window !== 'undefined' ? window.location.origin : SYSTEM_URL);
    if (APP_HOSTS.has(url.hostname)) return true;
    // Relative / absolute paths that already target SYSTEM_URL
    return href.startsWith(SYSTEM_URL) || url.href.startsWith(SYSTEM_URL);
  } catch {
    return false;
  }
}

/** Effective attribution for CTAs (stored first-touch, else default utm_content). */
export function effectiveUtmParams(): UtmParams {
  return getStoredUtm() ?? withDefaultUtmContent({});
}

/** Append stored/default UTMs onto an app URL. No-op for non-app URLs. */
export function attributedAppUrl(baseUrl: string): string {
  if (!isAppUrl(baseUrl)) return baseUrl;
  return appendUtmToUrl(baseUrl, effectiveUtmParams());
}

/** Rewrite every app-bound <a href> under root to include first-touch UTMs. */
export function decorateAppLinks(root: ParentNode = document): void {
  if (typeof document === 'undefined') return;
  const anchors = root.querySelectorAll?.('a[href]') ?? [];
  anchors.forEach((node) => {
    const a = node as HTMLAnchorElement;
    const href = a.getAttribute('href');
    if (!href || !isAppUrl(href)) return;
    const next = attributedAppUrl(href);
    if (next !== href) a.setAttribute('href', next);
  });
}

/**
 * Capture-phase click handler: ensure app links carry UTMs even when
 * Svelte re-renders bare hrefs, or when the click uses the native navigation.
 */
function onAppLinkClick(event: MouseEvent): void {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const a = target.closest('a[href]');
  if (!(a instanceof HTMLAnchorElement)) return;
  const href = a.getAttribute('href');
  if (!href || !isAppUrl(href)) return;
  const next = attributedAppUrl(href);
  if (next !== a.href && next !== href) {
    a.setAttribute('href', next);
  }
}

/**
 * Site-wide: rewrite app CTAs now + on future clicks.
 * Returns a cleanup function for onMount.
 */
export function installAppLinkAttribution(): () => void {
  if (typeof document === 'undefined') return () => {};
  decorateAppLinks();
  document.addEventListener('click', onAppLinkClick, true);
  return () => {
    document.removeEventListener('click', onAppLinkClick, true);
  };
}

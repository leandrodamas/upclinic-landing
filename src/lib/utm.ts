/**
 * First-touch UTM / click-id attribution for the landing site.
 * Stored in localStorage (`uc_utm`, 90 days) and a cookie on `.clinicupapp.com`.
 */

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
  ts: number;
  /** Epoch ms when this record expires */
  expiresAt: number;
};

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

function parseStored(raw: string | null): StoredUtm | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as StoredUtm;
    if (!data || typeof data !== 'object' || typeof data.expiresAt !== 'number') return null;
    if (Date.now() > data.expiresAt) return null;
    if (!data.params || typeof data.params !== 'object') return null;
    return data;
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
      ts: now,
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

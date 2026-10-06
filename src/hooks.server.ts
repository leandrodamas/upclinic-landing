import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { GA4_MEASUREMENT_ID, META_PIXEL_ID } from '$lib/constants';

const APP_LOGIN = 'https://upclinic-aa025.web.app/login';
const TRIAL_PATHS = new Set(['/cadastro', '/signup', '/teste-gratis']);

function appLoginRedirect(pathname: string, searchParams: URLSearchParams): string {
  const target = new URL(APP_LOGIN);
  searchParams.forEach((value, key) => {
    target.searchParams.set(key, value);
  });
  if (TRIAL_PATHS.has(pathname)) {
    target.searchParams.set('trial', 'true');
  }
  return target.toString();
}

/**
 * Inject measurement IDs from the single config source into app.html placeholders
 * so base snippets stay in sync with PUBLIC_META_PIXEL_ID / PUBLIC_GA4_MEASUREMENT_ID.
 *
 * Also redirect legacy /login and signup paths (already shared on WhatsApp) to the
 * Firebase app, preserving query strings / UTMs.
 */
export const handle: Handle = async ({ event, resolve }) => {
  const pathname = event.url.pathname.replace(/\/$/, '') || '/';

  if (pathname === '/login' || TRIAL_PATHS.has(pathname)) {
    throw redirect(308, appLoginRedirect(pathname, event.url.searchParams));
  }

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html
        .replaceAll('%meta_pixel_id%', META_PIXEL_ID)
        .replaceAll('%ga4_measurement_id%', GA4_MEASUREMENT_ID)
  });
};

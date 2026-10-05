import type { Handle } from '@sveltejs/kit';
import { GA4_MEASUREMENT_ID, META_PIXEL_ID } from '$lib/constants';

/**
 * Inject measurement IDs from the single config source into app.html placeholders
 * so base snippets stay in sync with PUBLIC_META_PIXEL_ID / PUBLIC_GA4_MEASUREMENT_ID.
 */
export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html
        .replaceAll('%meta_pixel_id%', META_PIXEL_ID)
        .replaceAll('%ga4_measurement_id%', GA4_MEASUREMENT_ID)
  });
};

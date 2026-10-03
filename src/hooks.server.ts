import type { Handle } from '@sveltejs/kit';
import { META_PIXEL_ID } from '$lib/constants';

/**
 * Inject the Meta Pixel ID from the single config source into app.html placeholders
 * so the base snippet + noscript fallback stay in sync with PUBLIC_META_PIXEL_ID.
 */
export const handle: Handle = async ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replaceAll('%meta_pixel_id%', META_PIXEL_ID)
  });
};

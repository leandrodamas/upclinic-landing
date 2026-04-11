import { redirect } from '@sveltejs/kit';

/** Redireciona links antigos /conversao para a página atual /comece */
export const prerender = true;

export function load(): never {
  throw redirect(308, '/comece');
}

import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    prerender: {
      handleMissingId: ({ path, id, referrer }) => {
        // Ignorar todos os links de âncora durante o prerender
        // Eles funcionarão corretamente no cliente
        console.warn(`⚠️  Link de âncora #${id} não encontrado em ${path} (referenciado de ${referrer}) - será resolvido no cliente`);
        return;
      }
    }
  }
};

export default config;

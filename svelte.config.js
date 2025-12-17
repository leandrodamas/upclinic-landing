import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'edge'
    }),

    prerender: {
      entries: [
        '/',
        '/funcionalidades',
        '/telemedicina',
        '/para-profissionais-da-saude',
        '/planos',
        '/sobre',
        '/contato',
        '/faq',
        '/lgpd',
        '/termos-servico',
        '/politica-privacidade',
        '/politica-cookies'
      ]
    }
  }
};

import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
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
      ],
      handleMissingId: ({ path, id, referrer }) => {
        // Ignorar todos os links de âncora durante o prerender
        // Eles funcionarão corretamente no cliente
        console.warn(`⚠️  Link de âncora #${id} não encontrado em ${path} (referenciado de ${referrer}) - será resolvido no cliente`);
        return;
      }
    }
  }
};

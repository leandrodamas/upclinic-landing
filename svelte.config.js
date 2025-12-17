import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter(),

    prerender: {
      entries: ['*'],
      handleHttpError: 'warn'
    },

    trailingSlash: 'never'
  }
};

export default config;

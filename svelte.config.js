import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),

    vite: {
      resolve: {
        alias: {
          '$annex-app': path.resolve('./src/annex-app'),
          // $components
          '$lib': path.resolve('./src/lib')
          // NOTE: ^^^ WORKING ABSOLUTE PATH DEFS FOR BUILD / COMPILE TIME ^^^
        }
      }
    }
  }
};

export default config;

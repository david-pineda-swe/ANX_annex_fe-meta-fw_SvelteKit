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
        // NOTE: ABSOLUTE PATH DEFS FOR BUILD & COMPILE TIME - CI/CD PROCESSING
        alias: {
          // NOTE: Supported package modules > TEMPORARY !
          // @annexjs/... is a temporary place holder until open-source package modules can be published.
          '@annexjs': path.resolve('./src/annexjs_package_modules'),

          '@nnex': path.resolve('./src/annexjs-extended'),
          '$pec': path.resolve('./src/spec-to-project')
        }
      }
    }
  }
};

export default config;

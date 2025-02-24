import path from 'node:path';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // DOCS - https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),

  kit: {
    // NOTE: ALIAS PATH DEFS FOR BUILD & COMPILE TIME - CI/CD PROCESSING
    alias: {
      'globalTypes': path.resolve('src/global.d.ts'),
      // NOTE: Supported package modules > TEMPORARY PLACEMENT WILL BE MADE INTO LIB !
      // annex/... is alias for Annex JS a temporary place holder until open-source package modules can be published.
      'annex': path.resolve('src/annexjs_package_modules'), // < LIB supported modules
      // TODO - IMPLEMENT AND SUPPORT LIB EXTENSION PATTERN OF COMPONENTS
      // TODO - RENAME ALIAS => ANNEX_[TARGET_MODULE]
      // 'annex_[TARGET]': path.resolve('./src/annexjs-extended'),
      '$pec': path.resolve('./src/_project') // < Project spec development modules
    }
  }
};

export default config;

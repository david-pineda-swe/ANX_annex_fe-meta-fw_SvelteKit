import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from "path";

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
  resolve: {
    // NOTE: ABSOLUTE PATH DEFS FOR BUILD & COMPILE TIME - CI/CD PROCESSING
    alias: {
      // NOTE: Supported package modules > TEMPORARY !
      // @annexjs/... is a temporary place holder until open-source package modules can be published.
      '@annexjs': path.resolve('./src/annexjs_package_modules'),
      '@nnex': path.resolve('./src/annexjs-extended'),
      '$pec': path.resolve('./src/spec-to-project')
    }
  },
  plugins: [sveltekit()]
};

export default config;
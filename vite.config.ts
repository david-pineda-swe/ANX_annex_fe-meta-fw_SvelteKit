import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { restartOnMarkdownEdit } from './vite-dev-support/restarts';
// import {restartOnFixtureEdit, restartOnMarkdownEdit } from './vite-dev-support/restarts';

/** @type {import('vite').UserConfig} */
const config: UserConfig = {
  build: {
    terserOptions: {
      compress: {
        drop_console: false
      }
    }
  },
  resolve: {},
  plugins: [
    sveltekit(),
    restartOnMarkdownEdit()
    // restartOnFixtureEdit() // TODO - NEEDS WORK <<
  ]
};

export default config;

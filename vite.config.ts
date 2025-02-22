import type { UserConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
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
    tailwindcss(),
    sveltekit(),
    restartOnMarkdownEdit()
    // restartOnFixtureEdit() // TODO - NEEDS WORK <<
  ]
};

export default config;

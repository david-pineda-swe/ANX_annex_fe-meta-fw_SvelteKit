import { PluginOption } from "vite";

export function restartOnMarkdownEdit(): PluginOption {
  return {
    name: 'md-edit-restart',
    apply: 'serve',
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.md')) {
        console.log(`\n>> RELOADING .md file: ${file}\n`);
        server.restart()
      }
    }
  }
}

export function restartOnFixtureEdit(): PluginOption {
  return {
    name: 'fixture-edit-restart',
    apply: 'serve',
    handleHotUpdate({ file, server }) {      
      if (file.includes('src/spec-to-project/fixtures')) {
        console.log(`\n>> RELOADING fixture file: ${file}\n`);
        server.restart()
      }
    }
  }
}
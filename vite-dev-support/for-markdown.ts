import { PluginOption } from "vite";

export default function restartOnMarkdownEdit(): PluginOption {
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
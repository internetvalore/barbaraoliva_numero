import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://barbaraolivadesign.netlify.app',
  server: {
    host: true,
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin"
    }
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/*', '@fontsource/*']
    },
    build: {
      cssCodeSplit: false
    }
  }
});
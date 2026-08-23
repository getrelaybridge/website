import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://getrelaybridge.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});

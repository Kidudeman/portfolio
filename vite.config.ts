import react from '@vitejs/plugin-react';
import analyze from 'rollup-plugin-analyzer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // Add the base path for GitHub Pages
  build: {
    rollupOptions: {
      plugins: [analyze()],
    },
  },
  plugins: [react(), tsconfigPaths()],
});

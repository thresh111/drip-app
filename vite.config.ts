import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import svgr from 'vite-plugin-svgr';
import SemiPlugin from '@jacob-z/vite-plugin-semi-theme-loader';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    SemiPlugin({
      theme: '@semi-bot/semi-theme-drip',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/wedproject/', // Add this line - should match your repository name
  server: {
    port: 3000,
    allowedHosts: [
      'localhost',
      '2f78-2001-44c8-45ea-4c51-940f-b099-230e-3830.ngrok-free.app',
      '*.ngrok-free.app', // This will allow all ngrok hosts
    ],
  },
  build: {
    outDir: 'dist',
  },
});
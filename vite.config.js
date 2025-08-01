import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    hmr: {
      host: '5173-ia8tgny5ye1tw4iuis2r0-203a15b6.manusvm.computer',
      protocol: 'ws',
    },
    watch: {
      usePolling: true,
    },
    allowedHosts: [
      '5173-ia8tgny5ye1tw4iuis2r0-203a15b6.manusvm.computer',
      'localhost',
      '127.0.0.1',
    ],
  },
})

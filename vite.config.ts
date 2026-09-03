import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        viewer: resolve(process.cwd(), 'viewer/index.html'),
        configurator: resolve(process.cwd(), 'configurator/index.html'),
        ar: resolve(process.cwd(), 'ar/index.html'),
        pricing: resolve(process.cwd(), 'pricing/index.html'),
        partnership: resolve(process.cwd(), 'partnership/index.html'),
        demo: resolve(process.cwd(), 'demo/index.html'),
        legal: resolve(process.cwd(), 'legal/index.html'),
        privacy: resolve(process.cwd(), 'privacy/index.html'),
      },
    },
  },
})

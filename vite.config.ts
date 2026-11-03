import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://neversmile0825.github.io/test/
export default defineConfig({
  plugins: [react()],
  base: '/test/',
  optimizeDeps: {
    include: ['gun'],
  },
  define: {
    global: 'globalThis',
  },
})

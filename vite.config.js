import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base matches the GitHub Pages path: https://<user>.github.io/outrunner-demo/
export default defineConfig({
  plugins: [react()],
  base: '/outrunner-demo/',
})

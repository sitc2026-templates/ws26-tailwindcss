import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: { host: true, port: 80, strictPort: true, allowedHosts: ['.skill17.com', '.skillsit.eu'] },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Digital_tools_react_project/', // এই লাইনটি ৪-০-৪ এরর দূর করবে
})
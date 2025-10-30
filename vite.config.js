import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/recetario2/', // 👈 reemplaza con el nombre EXACTO del repo
})

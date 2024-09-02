import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  // Assuming your Django server runs on port 8000
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable CSS code splitting per chunk
    cssCodeSplit: true,
    // Chunk splitting for optimal caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk — cached independently from app code
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Icons chunk
          icons: ['react-icons/fa'],
        },
      },
    },
  },
})

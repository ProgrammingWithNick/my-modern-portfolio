import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Elevates warning limit threshold from 500kB to 1000kB safely
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Automatically splits node_modules into distinct cacheable files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor-libs';
          }
        }
      }
    }
  }
})
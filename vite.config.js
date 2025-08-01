import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//add installed plugins here
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  //and here
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This allows you to use '@' as an alias for the 'src' directory
    }
  },
})

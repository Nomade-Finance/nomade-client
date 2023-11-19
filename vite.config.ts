import * as path from 'node:path'

import { defineConfig } from 'vite'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin()
  ],

  base: '/',
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@types-nomade': path.resolve(__dirname, 'src/types'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },

  build: {
    manifest: true
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This removes the "/VOCALink-Rammel/" from your paths
  build: {
    outDir: 'dist', // This changes the output folder from "docs" back to "dist"
  }
})

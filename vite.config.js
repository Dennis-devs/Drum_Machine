import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.mp3'],
  plugins: [react()],
  base: "/Drum_Machine/"
})

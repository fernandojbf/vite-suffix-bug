import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["example"],
  },
  ssr: {
    noExternal: ["example"],
  },
  plugins: [react()],
})

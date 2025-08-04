import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ServeMind_Product_1/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

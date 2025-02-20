import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias untuk src/
    },
  },
  server: {
    port: 8080, // Sesuaikan dengan kebutuhan
  },
});

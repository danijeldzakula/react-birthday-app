import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (warning.code === 'SOURCEMAP_ERROR') {
          return;
        }

        defaultHandler(warning);
      },
    },
  },
  logLevel: 'info',
  server: {
    host: 'localhost',
    port: 4000,
  },
});

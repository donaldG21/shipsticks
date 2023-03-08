import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import RubyPlugin from 'vite-plugin-ruby';
import WindiCSS from 'vite-plugin-windicss';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx',
    }),
    tsconfigPaths(),
    RubyPlugin(),
    WindiCSS({
      root: __dirname,
      scan: {
        fileExtensions: ['erb', 'haml', 'html', 'vue', 'js', 'ts', 'jsx', 'tsx'],
        dirs: ['app/views', 'app/frontend'], // or app/javascript, or app/packs
      },
    }),
  ],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'app/frontend/components'),
      '@config': resolve(__dirname, 'app/frontend/config'),
      '@features': resolve(__dirname, 'app/frontend/features'),
      '@contexts': resolve(__dirname, 'app/frontend/contexts'),
      '@images': resolve(__dirname, 'app/frontend/images'),
      '@types': resolve(__dirname, 'app/frontend/types'),
    }
  }
});

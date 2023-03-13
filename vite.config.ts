import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
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
  build: {
    sourcemap: true,
  },
});

/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [svgr({ exportAsDefault: true }), react(), tsconfigPaths(), eslintPlugin()]
});

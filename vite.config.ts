import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: '' }],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-moment'])],
    },
  },
});

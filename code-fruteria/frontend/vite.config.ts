import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/es/${name}/style/index`,
          },
        ],
      }),
    ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // Ant Design variables here can be override here
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

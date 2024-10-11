import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { federation } from '@module-federation/vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    federation({
      name: 'vite_host',
      shared: {
        vue:{}
      },
      remotes:{
        // both can not work
        // vite_provider: 'vite_provider@http://localhost:5175/remoteEntry.js',
        vite_provider: 'http://localhost:5175/remoteEntry.js',
      }
    })
  ],
  server: {
    port: 5176,
  },
  preview: {
    port: 5176,
  },
  build: {
    target: 'chrome89',
  },
})

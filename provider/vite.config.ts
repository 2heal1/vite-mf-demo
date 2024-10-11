import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  federation({
    name: 'vite_provider',
    manifest: true,
    filename: 'remoteEntry.js',
    exposes: {
      './HelloWorld': './src/components/HelloWorld.vue',
    },
    shared: {
      vue: {}
    },
  })],
  server: {
    port: 5175,
  },
  preview: {
    port: 5175,
  },
  build: {
    target: 'chrome89',
  },
})

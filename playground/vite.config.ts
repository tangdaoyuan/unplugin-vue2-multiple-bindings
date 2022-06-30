import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginReload from 'vite-plugin-reload'
import VitePluginInspect from 'vite-plugin-inspect'
import UnpluginVue2MultipleBinding from '../src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginReload({
      includes: ['../src/**/*.{ts,tsx}'],
    }),
    VitePluginInspect(),
    UnpluginVue2MultipleBinding.vite(),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})

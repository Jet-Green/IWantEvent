import {
  defineConfig
} from 'vite'

import vue from '@vitejs/plugin-vue'
import {
  VitePWA
} from 'vite-plugin-pwa'

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(
  ({
    command,
    mode
  }) => {
    let baseUrl = mode == 'development' ? '/' : '/IWantEvent/'
    return {
      test: {
        environment: 'jsdom'
      },
      base: baseUrl,
      plugins: [
        Components({
          resolvers: [
            AntDesignVueResolver({importStyle: "less"}),
          ],
          dts: true,
          include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/, /\.jsx$/]
        }),
        vue(),
        // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'images/apple-touch-icon.png'],
          manifest: {
            name: 'Хочу концерт',
            short_name: 'Хочу концерт',
            description: 'Description of your app',
            theme_color: '#ffffff',
            icons: [{
              src: 'android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'apple-touch-icon.png',
              sizes: '180x180',
              type: 'image/png',
            },

            {
              src: 'mstile-150x150.png',
              sizes: '150x150',
              type: 'image/png',
            },

            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            }
            ]
          }
        })

      ],
      define: {
        'process.env': {}
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
      css: {
        preprocessorOptions: {
          less: {
            modifyVars: {
              'primary-color': '#c0004e',
              'btn-danger-bg': '#709d5a'
            },
            javascriptEnabled: true
          }
        }
    },
      /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
      resolve: {
        extensions: [
          '.js',
          '.json',
          '.jsx',
          '.mjs',
          '.ts',
          '.tsx',
          '.vue',
        ]
      },
      */
    }
  })
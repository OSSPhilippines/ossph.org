/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js

import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

import ESLintPlugin from 'eslint-webpack-plugin'

import { configure } from 'quasar/wrappers'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)

export default configure(function (ctx) {
  return {
    // https://v2.quasar.dev/quasar-cli-webpack/supporting-ts
    supportTS: false,

    // https://v2.quasar.dev/quasar-cli-webpack/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-webpack/boot-files
    boot: [
      'axios',
      'directives',
      'vue-smooth-scroll',
      {
        server: false, // run on client-side only!
        path: 'aos.js', // references /src/boot/<name>.js
      },
    ],

    // https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-css
    css: ['app.scss'],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-build
    build: {
      env: require('dotenv').config().parsed,
      vueRouterMode: 'history', // available values: 'hash', 'history'

      // transpile: false,
      // publicPath: '/',

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: true, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://v2.quasar.dev/quasar-cli-webpack/handling-webpack
      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

      chainWebpack(chain) {
        chain.plugin('eslint-webpack-plugin').use(ESLintPlugin, [{ extensions: ['js', 'vue'] }])
      },

      extendWebpack(cfg) {
        cfg.module.rules.push(
          // {
          //   enforce: 'pre',
          //   test: /\.(js|vue)$/,
          //   loader: 'eslint-loader',
          //   exclude: /node_modules/,
          // },
          {
            test: /\.pug$/,
            loader: 'pug-plain-loader',
          }
        )
        cfg.resolve.alias = {
          ...cfg.resolve.alias,
          '@/': path.resolve(__dirname, './src'),
          '@/assets': path.resolve(__dirname, './src/assets'),
          '@/boot': path.resolve(__dirname, './src/boot'),
          '@/components': path.resolve(__dirname, './src/components'),
          '@/composables': path.resolve(__dirname, './src/composables'),
          '@/constants': path.resolve(__dirname, './src/constants'),
          '@/layouts': path.resolve(__dirname, './src/layouts'),
          '@/pages': path.resolve(__dirname, './src/pages'),
          '@/router': path.resolve(__dirname, './src/router'),
          '@/services': path.resolve(__dirname, './src/services'),
          '@/stores': path.resolve(__dirname, './src/stores'),
          '@/utils': path.resolve(__dirname, './src/utils'),
        }
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-devServer
    devServer: {
      server: {
        type: 'http',
      },
      port: 8080,
      open: true, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js#Property%3A-framework
    framework: {
      config: {},

      iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: ['BottomSheet', 'Meta', 'Notify', 'Ripple'],
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-webpack/developing-ssr/configuring-ssr
    ssr: {
      pwa: false,

      /**
       * Manually serialize the store state and provide it yourself
       * as window.__INITIAL_STATE__ to the client-side (through a <script> tag)
       * (Requires @quasar/app-webpack v3.5+)
       */
      manualStoreSerialization: false,

      /**
       * Manually inject the store state into ssrContext.state
       * (Requires @quasar/app-webpack v3.5+)
       */
      manualStoreSsrContextInjection: false,

      /**
       * Manually handle the store hydration instead of letting Quasar CLI do it.
       * For Pinia: store.state.value = window.__INITIAL_STATE__
       * For Vuex: store.replaceState(window.__INITIAL_STATE__)
       */
      manualStoreHydration: false,

      /**
       * Manually call $q.onSSRHydrated() instead of letting Quasar CLI do it.
       * This announces that client-side code should takeover.
       */
      manualPostHydrationTrigger: false,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if ({}).PORT is specified at runtime)

      maxAge: 1000 * 60 * 60 * 24 * 30,
      // Tell browser when a file from the server should expire from cache
      // (the default value, in ms)
      // Has effect only when server.static() is used

      // List of SSR middleware files (src-ssr/middlewares/*). Order is important.
      middlewares: [
        // ...
        'render', // Should not be missing, and should be last in the list.
      ],

      // optional; add/remove/change properties
      // of production generated package.json
      extendPackageJson(pkg) {
        // directly change props of pkg;
        // no need to return anything
      },

      // optional;
      // handles the Webserver webpack config ONLY
      // which includes the SSR middleware
      extendWebpackWebserver(cfg) {
        // directly change props of cfg;
        // no need to return anything
      },

      // optional; EQUIVALENT to extendWebpack() but uses webpack-chain;
      // handles the Webserver webpack config ONLY
      // which includes the SSR middleware
      chainWebpackWebserver(chain) {
        // chain is a webpack-chain instance
        // of the Webpack configuration
      },
    },

    // https://v2.quasar.dev/quasar-cli-webpack/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW

      // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
      // if using workbox in InjectManifest mode

      chainWebpackCustomSW(chain) {
        chain.plugin('eslint-webpack-plugin').use(ESLintPlugin, [{ extensions: ['js'] }])
      },

      manifest: {
        name: 'ossph.org',
        short_name: 'ossph.org',
        description: 'Open Source Software PH',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'ossph.org',
      },

      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain

      chainWebpackMain(chain) {
        chain.plugin('eslint-webpack-plugin').use(ESLintPlugin, [{ extensions: ['js'] }])
      },

      chainWebpackPreload(chain) {
        chain.plugin('eslint-webpack-plugin').use(ESLintPlugin, [{ extensions: ['js'] }])
      },
    },
  }
})

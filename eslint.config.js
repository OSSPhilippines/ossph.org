import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginQuasar from '@quasar/app-webpack/eslint'
import vueParser from 'vue-eslint-parser'
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import globals from 'globals'

export default [
  // Global ignores
  {
    ignores: [
      // Dependencies
      'node_modules/**',

      // Build outputs
      'dist/**',
      '.quasar/**',
      '*.min.js',
      '*.bundle.js',

      // Generated files
      'coverage/**',
      '*.log',

      // Config files (handled by Quasar build system or have their own linting)
      'eslint.config.js',
      'babel.config.js',
      'postcss.config.js',
      'prettier.config.js',
      'quasar.config.js',
      '.firebaserc',
      'firebase.json',

      // Quasar-specific directories (handled by Quasar build system)
      'src-pwa/**',
      'src-ssr/**',
      'src/boot/**',

      // Lock files (not code files)
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',

      // System files
      '.DS_Store',
      '*.swp',
      '*.swo',
      '*~',
    ],
  },

  ...pluginQuasar.configs.recommended,
  js.configs.recommended,

  /**
   * https://eslint.vuejs.org
   *
   * pluginVue.configs.base
   *   -> Settings and rules to enable correct ESLint parsing.
   * pluginVue.configs[ 'flat/essential']
   *   -> base, plus rules to prevent errors or unintended behavior.
   * pluginVue.configs["flat/strongly-recommended"]
   *   -> Above, plus rules to considerably improve code readability and/or dev experience.
   * pluginVue.configs["flat/recommended"]
   *   -> Above, plus rules to enforce subjective community defaults to ensure consistency.
   */
  ...pluginVue.configs['flat/essential'],

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        __dirname: 'readonly',
        __filename: 'readonly',
        __QUASAR_SSR__: 'readonly',
        __QUASAR_SSR_CLIENT__: 'readonly',
        __QUASAR_SSR_PWA__: 'readonly',
        __QUASAR_SSR_SERVER__: 'readonly',
        __statics: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
        cordova: 'readonly',
        exports: 'readonly',
        ga: 'readonly',
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
      },
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: false,
        },
        extraFileExtensions: ['.vue'],
      },
    },
  },
  {
    files: ['**/*.{js,mjs,vue}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-multi-str': 'off',
      'prefer-promise-reject-errors': 'off',
      'prettier/prettier': 'off',
    },
  },

  prettierSkipFormatting,
]

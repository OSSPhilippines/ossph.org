commit 76722ec4074f864c538c5357ef7a634ab5e8ad4b
Author: Guy Romelle Magayano <aspiredtechie2010@gmail.com>
Date:   Fri Nov 14 12:46:06 2025 +0800

    chore(eslint): add ESLint configuration for Vue.js with Prettier integration and custom rules

diff --git a/eslint.config.js b/eslint.config.js
new file mode 100644
index 00000000..b1c1c7c1
--- /dev/null
+++ b/eslint.config.js
@@ -0,0 +1,85 @@
+module.exports = {
+  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
+  // This option interrupts the configuration hierarchy at this file
+  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
+  root: true,
+
+  parser: 'vue-eslint-parser',
+  parserOptions: {
+    parser: '@babel/eslint-parser',
+    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
+    sourceType: 'module', // Allows for the use of imports
+    requireConfigFile: true, // Use babel.config.js for Babel configuration
+  },
+
+  env: {
+    browser: true,
+  },
+
+  // Rules order is important, please avoid shuffling them
+  extends: [
+    // Base ESLint recommended rules
+    // 'eslint:recommended',
+
+    // Uncomment any of the lines below to choose desired strictness,
+    // but leave only one uncommented!
+    // See https://eslint.vuejs.org/rules/#available-rules
+    'plugin:vue/essential', // Priority A: Essential (Error Prevention) - Vue 3
+    // 'plugin:vue/strongly-recommended', // Priority B: Strongly Recommended (Improving Readability) - Vue 3
+    // 'plugin:vue/recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead) - Vue 3
+
+    'standard',
+    // Prettier must be last to override other configs
+    'plugin:prettier/recommended',
+  ],
+
+  plugins: [
+    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
+    // required to lint *.vue files
+    'vue',
+    'prettier',
+  ],
+
+  globals: {
+    ga: 'readonly', // Google Analytics
+    cordova: 'readonly',
+    __statics: 'readonly',
+    __QUASAR_SSR__: 'readonly',
+    __QUASAR_SSR_SERVER__: 'readonly',
+    __QUASAR_SSR_CLIENT__: 'readonly',
+    __QUASAR_SSR_PWA__: 'readonly',
+    process: 'readonly',
+    Capacitor: 'readonly',
+    chrome: 'readonly',
+  },
+
+  // add your custom rules here
+  rules: {
+    // allow async-await
+    'generator-star-spacing': 'off',
+    // allow paren-less arrow functions
+    'arrow-parens': 'off',
+    'one-var': 'off',
+
+    'import/first': 'off',
+    'import/named': 'error',
+    'import/namespace': 'error',
+    'import/default': 'error',
+    'import/export': 'error',
+    'import/extensions': 'off',
+    'import/no-unresolved': 'off',
+    'import/no-extraneous-dependencies': 'off',
+    'prefer-promise-reject-errors': 'off',
+
+    // allow debugger during development only
+    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
+
+    // custom
+    'no-console': 'off',
+    'no-multi-str': 'off',
+
+    // Prettier integration - Prettier handles formatting, so we disable conflicting rules
+    // eslint-config-prettier disables formatting rules, but we keep some custom ones
+    'prettier/prettier': 'error',
+  },
+}

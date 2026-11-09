import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { ignores: ['docs/**', '.cache/**', 'node_modules/**', 'test-results/**', 'playwright-report/**'] },
  js.configs.recommended,
  ...vue.configs['flat/vue2-essential'],
  {
    files: ['src/**/*.{js,vue}', 'public/*.js'],
    languageOptions: { globals: globals.browser },
    rules: { 'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'none' }] }
  },
  {
    files: ['*.{mjs,cjs}', 'scripts/**/*.mjs', 'tests/**/*.{mjs,cjs}'],
    languageOptions: { globals: globals.node }
  },
  {
    files: ['tests/**/*.cjs'],
    languageOptions: { globals: globals.browser }
  },
  { files: ['public/localReceiver.js'], languageOptions: { globals: globals.serviceworker } },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': ['error', { shallowOnly: true }]
    }
  }
]

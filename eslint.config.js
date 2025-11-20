import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Игнорируем папку dist
  globalIgnores(['dist']),

  // 🔹 Конфиг для фронтенда (React)
  {
    files: ['src/**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // браузерные глобальные переменные
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Игнорируем предупреждения про неиспользуемый React (JSX новый синтаксис)
      'no-unused-vars': ['warn', { varsIgnorePattern: 'React' }],
      // Можно добавить свои правила ESLint для фронтенда
    },
  },

  // 🔹 Конфиг для backend (Node.js)
  {
    files: ['Server/**/*.{js,jsx}'], // путь к серверу
    languageOptions: {
      globals: globals.node, // Node.js глобалы: process, require, __dirname
      sourceType: 'module',
    },
    rules: {
      // Можно добавить правила для бэкенда, если нужно
    },
  },
])

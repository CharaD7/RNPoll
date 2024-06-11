//import babelParser from '@babel/eslint-parser';
import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      '!.*',
      '**/*.js',
      'dist',
      'node_modules',
      'public',
      'styles',
      'templates',
    ],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
];

//import babelParser from '@babel/eslint-parser';
import globals from 'globals';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  ts.configs.recommended,
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

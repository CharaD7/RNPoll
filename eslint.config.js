//import babelParser from '@babel/eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
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
    files: ['**/*.ts', '**/*.tsx'],
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
    rules: {
      indent: 'error',
      semi: ['error', 'always'],
    },
  },
  eslintConfigPrettier,
];

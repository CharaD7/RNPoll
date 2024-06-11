//import babelParser from '@babel/eslint-parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJs variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

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
  ...compat.config({
    // files: ['**/*.ts', '**/*.tsx'],
    plugins: ['import', 'react', 'react-hooks', 'simple-import-sort'],
    env: {
      es2022: true,
      node: true,
    },
    // languageOptions: {
    //   ecmaVersion: 2022,
    //   parserOptions: {
    //     ecmaFeatures: {
    //       jsx: true,
    //     },
    //   },
    //   sourceType: 'module',
    //   globals: {
    //     ...globals.browser,
    //   },
    // },
    rules: {
      indent: 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'linebreak-style': 'off',
      'no-extra-semi': 'error',
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react-native/no-color-literals': 'off',
      'sort-imports': [
        'warn',
        { ignoreCase: true, ignoreDeclarationSort: true },
      ],
      '@typescript-eslint/no-use-before-define': 'warn',
    },
  }),
  eslintConfigPrettier,
];

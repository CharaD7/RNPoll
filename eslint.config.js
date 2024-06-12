import eslintConfigPrettier from 'eslint-config-prettier';
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
  js.configs.recommended,
  ts.configs.recommended,
  ...compat.config({
    plugins: ['import', 'react', 'react-hooks', 'simple-import-sort'],
    env: {
      es2022: true,
      node: true,
    },
    parserOptions: {
      project: './tsconfig.json',
    },
    globals: {
      Atomics: 'readonly',
      sharedArrayBuffer: 'readonly',
    },
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

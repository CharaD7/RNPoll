import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
// import js from '@eslint/js';
// import ts from '@typescript-eslint/eslint-plugin';
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
  // js.configs.recommended, // Recommended config applied to all files
  // ts.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...compat.config({
      plugins: ['react', 'react-hooks', 'simple-import-sort', 'import'],
      // extends: ['eslint:recommended']
    }),
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['tsconfig.json'],
      },
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
      },
    },
    ignores: ['!.*', '**/*.js', 'dist', 'public', 'styles', 'templates'],
    rules: {
      // ...ts.configs.recommended.rules,
      // ...js.configs.recommended.rules,
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
      'max-len': ['error', { code: 120 }],
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
  },
  eslintConfigPrettier,
];

//import babelParser from '@babel/eslint-parser';
import globals from 'globals';
import js from '@eslint/js';

export default [
  //airbnb.hooks,
  //airbnb.typescript,
  js.configs.recommended,
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

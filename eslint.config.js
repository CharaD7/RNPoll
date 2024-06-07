//import airbnb from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import js from '@eslint/js';

export default [
  //airbnb.hooks,
  //airbnb.typescript,
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
];

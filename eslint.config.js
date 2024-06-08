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
      sourceType: 'module',
      //parser: babelParser,
      globals: {
        ...globals.browser,
      },
    },
  },
];

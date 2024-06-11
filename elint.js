module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    Atomics: 'readonly',
    sharedArrayBuffer: 'readonly',
  },
  compilerOptions: {
    jsx: 'react',
  },
  ignorePatterns: ['!.*', '**/*.js', 'dist', 'node_modules'],
  plugins: ['import', 'react', 'react-hooks', 'simple-import-sort'],
  exclude: [
    '__tests__/**/*-test.ts',
    'build/*',
    'node_modules/*',
    'public/*',
    'styles/*',
    'templates/*',
  ],
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    // "import/no-duplicates": "error",
    // "import/no-unresolved": ["error", { "commonjs": true }],
    // "import/no-extraneous-dependencies": "error",
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    quotes: ['error', 'double'],
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
    'no-extra-semi': ['error'],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-native/no-color-literals': 'off',
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: false,
      },
    ],
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    '@typescript-eslint/no-use-before-define': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect',
    },
  },
};
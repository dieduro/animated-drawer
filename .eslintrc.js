// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'airbnb-typescript'
  ],
  rules: {
    'import/no-commonjs': 'off',
    "react-native/no-inline-styles": 'off',
    'react-native/no-raw-text': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
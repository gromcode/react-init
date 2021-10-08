module.exports = {
  plugins: ['babel', 'import', 'prettier'],
  extends: ['airbnb-base', 'plugin:react/recommended'],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'no-console': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    react: {
      version: '16.14',
    },
  },
};
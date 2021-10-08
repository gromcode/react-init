module.exports = {
<<<<<<< HEAD
<<<<<<< Updated upstream
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
=======
  plugins: ['babel', 'import', 'prettier'],
  extends: ['airbnb-base', 'plugin:react/recommended'],
>>>>>>> Stashed changes
=======
  extends: ['eslint-config-airbnb-base', 'prettier', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
>>>>>>> bd960c3b2d407b5a78e2b7d846d35a5f2937aa16
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
<<<<<<< HEAD
<<<<<<< Updated upstream
  rules: {
=======
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
>>>>>>> Stashed changes
    'no-console': 0,
    'no-alert': 0,
    'import/prefer-default-export': 0,
    'prefer-template': 0,
=======
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
>>>>>>> bd960c3b2d407b5a78e2b7d846d35a5f2937aa16
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
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

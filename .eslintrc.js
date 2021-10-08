module.exports = {
<<<<<<< Updated upstream
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
=======
  plugins: ['babel', 'import', 'prettier'],
  extends: ['airbnb-base', 'plugin:react/recommended'],
>>>>>>> Stashed changes
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
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
    'import/extensions': 0,
    'no-unused-vars': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-constant-condition': 0,
    'no-restricted-globals': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
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

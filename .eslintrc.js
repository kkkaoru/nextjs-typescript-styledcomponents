/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};

module.exports = {
  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parser: 'babel-eslint',

  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      generators: true,
    },
  },

  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },

  // http://eslint.org/docs/user-guide/configuring#configuring-plugins
  plugins: ['babel', 'prettier'],

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    './rules/base/stylistic',
    './rules/base/best-practices',
    './rules/base/errors',
    './rules/base/node',
    './rules/base/strict',
    './rules/base/variables',
    './rules/base/es6',
    './rules/babel/babel',
    './rules/prettier/prettier',
  ].map(require.resolve),
};

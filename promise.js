// @flow
module.exports = {
  plugins: ['promise'],
  env: {
    es6: true,
    node: true,
    commonjs: true,
  },
  extends: ['./rules/promise/promise'].map(require.resolve),
};

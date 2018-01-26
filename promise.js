module.exports = {
  plugins: ['promise'],
  env: {
    es6: true,
  },
  extends: ['./rules/promise/promise'].map(require.resolve),
};

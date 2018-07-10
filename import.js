// @flow
module.exports = {
  plugins: ['import'],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx'] } },
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
  },
  extends: [
    './rules/import/helpful-warnings',
    './rules/import/module-systems',
    './rules/import/static-analysis',
    './rules/import/style-guide',
  ].map(require.resolve),
};

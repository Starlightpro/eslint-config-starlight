module.exports = {
  settings: {
    react: {
      pragma: 'React',
      version: '16.0',
      flowVersion: '0.54',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  extends: ['./rules/react/react', './rules/react/jsx'].map(require.resolve),
};

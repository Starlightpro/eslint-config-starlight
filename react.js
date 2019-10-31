module.exports = {
  settings: {
    react: {
      pragma: 'React',
      version: '16.9',
      flowVersion: '0.108',
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

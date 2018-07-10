module.exports = {
  settings: {
    react: {
      pragma: 'React',
      version: '16.4',
      flowVersion: '0.76',
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

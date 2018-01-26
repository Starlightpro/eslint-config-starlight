module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        semi: true,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
        parser: 'babylon',
      },
    ],
  },
};

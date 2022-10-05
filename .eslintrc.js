module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    'no-debugger': 0,
    'no-constant-binary-expression': 'off',
    'prefer-object-has-own': 'off',
    'no-use-before-define': 'off',
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      1,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/function-component-definition': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
    'react/hook-use-state': 0,
    'react/iframe-missing-sandbox': 1,
    'react/jsx-no-leaked-render': 1,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    ],

    /**
     * Disallow the unary operators ++ and --
     * @see http://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': 0,
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'all',
        bracketSameLine: false,
        semi: true,
        bracketSpacing: true,
        // below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/sort-comp': [
      1,
      {
        order: ['type-annotations', 'static-methods', 'lifecycle', 'everything-else', 'render'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/comma-dangle': ['off'],
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',

    'import/order': [
      'error',
      {
        'newlines-between': 'ignore',
        groups: [
          // 'fs', 'path' etc.
          'builtin',
          // 'lodash', 'react' etc.
          'external',
          // 'source/components/header'
          'internal',
          // '../../components/footer'
          'parent',
          // './enums', './styles' etc.
          'sibling',
          // './'
          'index',
        ],
      },
    ],
    /**
     * Disallow unnecessary return await
     * @see http://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'off',
    'no-restricted-globals': 'off',
  },
  plugins: ['prettier', 'react-hooks'],
};

// @flow
module.exports = {
  /**
   * React plugin JSX rules
   * @see https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
   */
  rules: {
    /**
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     */
    'react/jsx-props-no-multi-spaces': 'error',
    /**
     * Enforce shorthand or standard form for React fragments
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-fragments.md
     */
    'react/jsx-fragments': 'off',
    'react/no-unsafe': 'off',
    /**
     * This option validates a specific depth for JSX.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     */
    'react/jsx-max-depth': ['error', { max: 4 }],
    'react/jsx-child-element-spacing': 'error',
    /**
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
     */
    'react/jsx-sort-default-props': 'off',
    /**
     * Validate closing tag location in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'react/jsx-closing-tag-location': 'off',
    /**
     * Validate JSX indentation
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     * @NOTE Off for Prettier
     */
    'react/jsx-indent': 'off',

    /**
     * Validate props indentation in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'react/jsx-indent-props': 'off',

    /**
     * Prevent comments from being inserted as text nodes
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     */
    'react/jsx-no-comment-textnodes': 'error',

    /**
     * Prevent usage of unsafe target='_blank'
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': 'error',
    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'react/jsx-curly-spacing': 'off',

    /**
     * Enforce or disallow spaces around equal signs in JSX attributes
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'react/jsx-equals-spacing': 'off',

    /**
     * Validate closing bracket location in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'react/jsx-closing-bracket-location': 'off',

    /**
     * Prevent missing parentheses around multilines JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'react/jsx-wrap-multilines': 'off',

    /**
     * Enforce position of the first prop in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     * @NOTE Off for Prettier
     */
    'react/jsx-first-prop-new-line': 'off',

    /**
     * Validate whitespace in and around the JSX opening and closing brackets
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'react/jsx-tag-spacing': 'off',

    /**
     * Limit maximum of props on a single line in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     * @NOTE Off for Prettier
     */
    'react/jsx-max-props-per-line': 'off',
    /**
     * Enforce boolean attributes notation in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     * @NOTE fixable
     */
    'react/jsx-boolean-value': ['error', 'never'],

    /**
     * Restrict file extensions that may contain JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],

    /**
     * Enforce event handler naming conventions in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    'react/jsx-handler-names': 'off',

    /**
     * Validate JSX has key prop when in array or iterator
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     */
    'react/jsx-key': 'error',

    /**
     * Prevent usage of .bind() and arrow functions in JSX props
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     */
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        ignoreRefs: false,
      },
    ],

    /**
     * Prevent duplicate props in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: false,
      },
    ],

    /**
     * Prevent usage of unwrapped JSX strings
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     */
    'react/jsx-no-literals': 'off',

    /**
     * Disallow undeclared variables in JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     */
    'react/jsx-no-undef': 'error',
    /**
     * off for prettier
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     */
    'react/jsx-one-expression-per-line': 'off',
    /**
     * Enforce PascalCase for user-defined JSX components
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
      },
    ],

    /**
     * Enforce props alphabetical sorting
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': 'off',

    /**
     * Prevent React to be incorrectly marked as unused
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     */
    'react/jsx-uses-react': 'error',

    /**
     * Prevent variables used in JSX to be incorrectly marked as unused
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     */
    'react/jsx-uses-vars': 'error',
  },
};

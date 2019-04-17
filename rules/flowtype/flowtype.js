module.exports = {
  /**
   * Flowtype plugin rules
   * @see https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules
   */
  rules: {
    /**
     * @see https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-complex-type
     */
    'flowtype/array-style-complex-type': 'error',
    'flowtype/array-style-simple-type': 'error',
    'flowtype/no-mixed': 'off',
    'flowtype/no-mutable-array': 'off',
    'flowtype/require-compound-type-alias': 'off',
    /**
     * An extension of ESLint's no-unused-expressions. This rule ignores type cast expressions,
     * but otherwise behaves the same as ESLint's no-unused-expressions.
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-unused-expressions
     */
    'flowtype/no-unused-expressions': 'warn',
    /**
     * Marks Flow type identifiers as defined
     * @see https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
     */
    'flowtype/define-flow-type': 'error',
    /**
     * Enforces a particular style for boolean type annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#boolean-style
     * @fixable
     */
    'flowtype/boolean-style': ['error', 'boolean'],

    /**
     * Enforces consistent use of trailing commas in Object and Tuple annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'flowtype/delimiter-dangle': 'off',

    /**
     * Enforces consistent spacing within generic type annotation parameters
     * @see https://github.com/gajus/eslint-plugin-flowtype#generic-spacing
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'flowtype/generic-spacing': 'off',

    /**
     * Checks for duplicate properties in Object annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
     */
    'flowtype/no-dupe-keys': 'error',

    /**
     * Disallows use of primitive constructors as types, such as Boolean, Number and String
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-primitive-constructor-types
     */
    'flowtype/no-primitive-constructor-types': 'error',

    /**
     * Disallows Flow type imports, exports, aliases, and annotations in files missing a valid Flow file declaration (or a @noflow annotation)
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-types-missing-file-annotation
     */
    'flowtype/no-types-missing-file-annotation': 'error',

    /**
     * Warns against weak type annotations any, Object and Function
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
     */
    'flowtype/no-weak-types': 'off',

    /**
     * Enforces consistent separators between properties in Flow object types
     * @see https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'flowtype/object-type-delimiter': 'off',

    /**
     * Requires that all function parameters have type annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
     */
    'flowtype/require-parameter-type': 'off',

    /**
     * Requires that functions have return type annotation
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-return-type
     */
    'flowtype/require-return-type': 'off',

    /**
     * Validates Flow file annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
     */
    'flowtype/require-valid-file-annotation': [2, 'always'],

    /**
     * Requires that all variable declarators have type annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-variable-type
     */
    'flowtype/require-variable-type': 'off',

    /**
     * Enforces consistent use of semicolons after type aliases
     * @see https://github.com/gajus/eslint-plugin-flowtype#semi
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'flowtype/semi': 'off',

    /**
     * Enforces sorting of Object annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#sort-keys
     */
    'flowtype/sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: true,
        natural: false,
      },
    ],

    /**
     * Enforces consistent spacing after the type annotation colon
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'flowtype/space-after-type-colon': 'off',

    /**
     * Enforces consistent spacing before the opening < of generic type annotation parameters
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'flowtype/space-before-generic-bracket': 'off',

    /**
     * Enforces consistent spacing before the type annotation colon
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-before-type-colon
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'flowtype/space-before-type-colon': 'off',

    /**
     * Enforces a consistent naming pattern for type aliases
     * @see https://github.com/gajus/eslint-plugin-flowtype#type-id-match
     */
    'flowtype/type-id-match': 'off',

    /**
     * Enforces consistent spacing around union and intersection type separators (| and &)
     * @see https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
     * @NOTE fixable
     * @NOTE Off for Prettier
     */
    'flowtype/union-intersection-spacing': 'off',

    /**
     * Marks Flow type alias declarations as used
     * @see https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
     */
    'flowtype/use-flow-type': 'error',
    'flowtype/require-exact-type': 'off',
    'flowtype/no-flow-fix-me-comments': 'off',
    'flowtype/require-types-at-top': 'off',
    'flowtype/newline-after-flow-annotation': 'off',
    'flowtype/no-existential-type': 'off',
    'flowtype/spread-exact-type': 'off',
    'flowtype/type-import-style': 'off',
  },
};

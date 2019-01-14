module.exports = {
  /**
   * Stylistic rules
   * @see http://eslint.org/docs/rules/#stylistic-issues
   */
  rules: {
    /**
     * Enforce linebreaks after opening and before closing array brackets
     * @see http://eslint.org/docs/rules/array-bracket-newline
     * @fixable
     */
    'array-bracket-newline': 'off',

    /**
     * Enforce consistent spacing inside array brackets
     * @see http://eslint.org/docs/rules/array-bracket-spacing
     * @fixable
     */
    'array-bracket-spacing': 'off',

    /**
     * Enforce line breaks after each array element
     * @see http://eslint.org/docs/rules/array-element-newline
     * @fixable
     */
    'array-element-newline': 'off',

    /**
     * Enforce consistent spacing inside single-line blocks
     * @see http://eslint.org/docs/rules/block-spacing
     * @fixable
     */
    'block-spacing': 'off',

    /**
     * Enforce consistent brace style for blocks
     * @see http://eslint.org/docs/rules/brace-style
     * @fixable
     */
    'brace-style': 'off',

    /**
     * Enforce camelcase naming convention
     * @see http://eslint.org/docs/rules/camelcase
     */
    camelcase: ['error', { properties: 'always' }],

    /**
     * Enforce or disallow capitalization of the first letter of a comment
     * @see http://eslint.org/docs/rules/capitalized-comments
     */
    // wHO CaRes?
    'capitalized-comments': 'off',

    /**
     * Require or disallow trailing commas
     * @see http://eslint.org/docs/rules/comma-dangle
     * @fixable
     */
    'comma-dangle': 'off',

    /**
     * Enforce consistent spacing before and after commas
     * @see http://eslint.org/docs/rules/comma-spacing
     * @fixable
     */
    'comma-spacing': 'off',

    /**
     * Enforce consistent comma style
     * @see http://eslint.org/docs/rules/comma-style
     * @fixable
     */
    'comma-style': 'off',

    /**
     * Enforce consistent spacing inside computed property brackets
     * @see http://eslint.org/docs/rules/computed-property-spacing
     * @fixable
     */
    'computed-property-spacing': 'off',

    /**
     * Enforce consistent naming when capturing the current execution context
     * @see http://eslint.org/docs/rules/consistent-this
     */
    'consistent-this': 'off',

    /**
     * Require or disallow newline at the end of files
     * @see http://eslint.org/docs/rules/eol-last
     * @fixable
     */
    'eol-last': 'off',

    /**
     * Require or disallow spacing between function identifiers and their invocations
     * @see http://eslint.org/docs/rules/func-call-spacing
     * @fixable
     */
    'func-call-spacing': 'off',

    /**
     * Require function names to match the name of the variable or property to which they are assigned
     * @see http://eslint.org/docs/rules/func-name-matching
     */
    'func-name-matching': 'off',

    /**
     * Require or disallow named function expressions
     * @see http://eslint.org/docs/rules/func-names
     */
    'func-names': ['error', 'always'],

    /**
     * Enforce the consistent use of either function declarations or expressions
     * @see http://eslint.org/docs/rules/func-style
     */
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    /**
     * This rule enforces consistent line breaks inside parentheses of function parameters or arguments.
     * @see https://eslint.org/docs/rules/function-paren-newline
     */
    'function-paren-newline': 'off',
    /**
     * Disallow specified identifiers
     * @see http://eslint.org/docs/rules/id-blacklist
     */
    'id-blacklist': 'off',

    /**
     * Enforce minimum and maximum identifier lengths
     * @see http://eslint.org/docs/rules/id-length
     */
    'id-length': 'off',

    /**
     * Require identifiers to match a specified regular expression
     * @see http://eslint.org/docs/rules/id-match
     */
    'id-match': 'off',
    /**
     * Consistent location for an arrow function containing an implicit return
     * @see https://eslint.org/docs/rules/implicit-arrow-linebreak
     */
    'implicit-arrow-linebreak': 'off',
    /**
     * Enforce consistent indentation
     * @see http://eslint.org/docs/rules/indent
     * @fixable
     */
    indent: 'off',
    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes
     * @see http://eslint.org/docs/rules/jsx-quotes
     * @fixable
     */
    'jsx-quotes': 'off',

    /**
     * Enforce consistent spacing between keys and values in object literal properties
     * @see http://eslint.org/docs/rules/key-spacing
     * @fixable
     */
    'key-spacing': 'off',

    /**
     * Enforce consistent spacing before and after keywords
     * @see http://eslint.org/docs/rules/keyword-spacing
     * @fixable
     */
    'keyword-spacing': 'off',

    /**
     * Enforce position of line comments
     * @see http://eslint.org/docs/rules/line-comment-position
     */
    'line-comment-position': 'off',

    /**
     * Enforce consistent linebreak style
     * @see http://eslint.org/docs/rules/linebreak-style
     * @fixable
     */
    'linebreak-style': ['error', 'unix'],

    /**
     * Require empty lines around comments
     * @see http://eslint.org/docs/rules/lines-around-comment
     * @fixable
     */
    'lines-around-comment': 'off',
    /**
     * Require or disallow newlines around directives
     * @see http://eslint.org/docs/rules/lines-around-directive
     * @fixable
     */
    'lines-around-directive': 'off',

    /**
     *
     * This rule improves readability by enforcing lines between class members. It will not check empty lines before
     * the first member and after the last member, since that is already taken care of by padded-blocks.
     * @see https://github.com/eslint/eslint/blob/master/docs/rules/lines-between-class-members.md
     *
     */
    'lines-between-class-members': ['error', 'always'],
    /**
     * Enforce a maximum depth that blocks can be nested
     * @see http://eslint.org/docs/rules/max-depth
     */
    'max-depth': [
      'error',
      {
        max: 4,
      },
    ],

    /**
     * Enforce a maximum line length
     * @see http://eslint.org/docs/rules/max-len
     */
    'max-len': 'off',

    /**
     * Enforce a maximum number of lines per file
     * @see http://eslint.org/docs/rules/max-lines
     */
    'max-lines': [
      'error',
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    /**
     * Enforce a maximum depth that callbacks can be nested
     * @see http://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': [
      'error',
      {
        max: 5,
      },
    ],

    /**
     * Enforce a maximum number of parameters in function definitions
     * @see http://eslint.org/docs/rules/max-params
     */
    'max-params': [
      'error',
      {
        max: 5,
      },
    ],

    /**
     * Enforce a maximum number of statements allowed per line
     * @see http://eslint.org/docs/rules/max-statements-per-line
     */
    'max-statements-per-line': [
      'error',
      {
        max: 2,
      },
    ],

    /**
     * Enforce a maximum number of statements allowed in function blocks
     * @see http://eslint.org/docs/rules/max-statements
     */
    'max-statements': 'off',

    /**
     * Enforce newlines between operands of ternary expressions
     * @see http://eslint.org/docs/rules/multiline-ternary
     */
    'multiline-ternary': 'off',

    /**
     * enforce a particular style for multiline comments (multiline-comment-style)
     * @see https://github.com/eslint/eslint/blob/master/docs/rules/multiline-comment-style.md
     */
    'multiline-comment-style': 'off',

    /**
     * Require constructor names to begin with a capital letter
     * @see http://eslint.org/docs/rules/new-cap
     */
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        properties: true,
      },
    ],

    /**
     * Require parentheses when invoking a constructor with no arguments
     * @see http://eslint.org/docs/rules/new-parens
     * @fixable
     */
    'new-parens': 'off',

    /**
     * Require or disallow an empty line after variable declarations
     * @see http://eslint.org/docs/rules/newline-after-var
     * @fixable
     */
    'newline-after-var': 'off',

    /**
     * Require an empty line before return statements
     * @see http://eslint.org/docs/rules/newline-before-return
     * @fixable
     */
    'newline-before-return': 'off',

    /**
     * Require a newline after each call in a method chain
     * @see http://eslint.org/docs/rules/newline-per-chained-call
     */
    'newline-per-chained-call': 'off',

    /**
     * Disallow Array constructors
     * @see http://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'error',

    /**
     * Disallow bitwise operators
     * @see http://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': 'error',

    /**
     * Disallow continue statements
     * @see http://eslint.org/docs/rules/no-continue
     */
    'no-continue': 1,

    /**
     * Disallow inline comments after code
     * @see http://eslint.org/docs/rules/no-inline-comments
     */
    'no-inline-comments': 'error',

    /**
     * Disallow if statements as the only statement in else blocks
     * @see http://eslint.org/docs/rules/no-lonely-if
     * @fixable
     */
    'no-lonely-if': 'error',

    /**
     * Disallow mixed binary operators
     * @see http://eslint.org/docs/rules/no-mixed-operators
     */
    'no-mixed-operators': 'off',

    /**
     * Disallow mixed spaces and tabs for indentation
     * @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'no-mixed-spaces-and-tabs': 'off',

    /**
     * Disallow use of chained assignment expressions
     * @see http://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': 'off',

    /**
     * Disallow multiple empty lines
     * @see http://eslint.org/docs/rules/no-multiple-empty-lines
     * @fixable
     */
    'no-multiple-empty-lines': 'off',

    /**
     * Disallow negated conditions
     * @see http://eslint.org/docs/rules/no-negated-condition
     */
    'no-negated-condition': 'off',

    /**
     * Disallow nested ternary expressions
     * @see http://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': 'off',

    /**
     * Disallow Object constructors
     * @see http://eslint.org/docs/rules/no-new-object
     */
    'no-new-object': 'error',

    /**
     * Disallow the unary operators ++ and --
     * @see http://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': 'off',

    /**
     * Disallow specified syntax
     * @see http://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': ['error', 'WithStatement'],

    /**
     * Disallow tabs in file
     * @see http://eslint.org/docs/rules/no-tabs
     */
    'no-tabs': 'off',

    /**
     * Disallow ternary operators
     * @see http://eslint.org/docs/rules/no-ternary
     */
    'no-ternary': 'off',

    /**
     * Disallow trailing whitespace at the end of lines
     * @see http://eslint.org/docs/rules/no-trailing-spaces
     * @fixable
     */
    'no-trailing-spaces': 'off',

    /**
     * Disallow dangling underscores in identifiers
     * @see http://eslint.org/docs/rules/no-underscore-dangle
     */
    'no-underscore-dangle': 'off',

    /**
     * Disallow ternary operators when simpler alternatives exist
     * @see http://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',
    'no-useless-catch': 'error',

    /**
     * Disallow whitespace before properties
     * @see http://eslint.org/docs/rules/no-whitespace-before-property
     * @fixable
     */
    'no-whitespace-before-property': 'off',

    /**
     * Enforce the location of single-line statements
     * @see http://eslint.org/docs/rules/nonblock-statement-body-position
     * @fixable
     */
    'nonblock-statement-body-position': 'off',

    /**
     * Enforce consistent line breaks inside braces
     * @see http://eslint.org/docs/rules/object-curly-newline
     */
    'object-curly-newline': 'off',

    /**
     * Enforce consistent spacing inside braces
     * @see http://eslint.org/docs/rules/object-curly-spacing
     * @fixable
     */
    'object-curly-spacing': 'off',

    /**
     * Enforce placing object properties on separate lines
     * @see http://eslint.org/docs/rules/object-property-newline
     */
    'object-property-newline': 'off',

    /**
     * Require or disallow newlines around variable declarations
     * @see http://eslint.org/docs/rules/one-var-declaration-per-line
     * @fixable
     */
    'one-var-declaration-per-line': 'off',

    /**
     * Enforce variables to be declared either together or separately in functions
     * @see http://eslint.org/docs/rules/one-var
     */
    'one-var': 'off',

    /**
     * Require or disallow assignment operator shorthand where possible
     * @see http://eslint.org/docs/rules/operator-assignment
     */
    'operator-assignment': 'off',

    /**
     * Enforce consistent linebreak style for operators
     * @see http://eslint.org/docs/rules/operator-linebreak
     */
    'operator-linebreak': 'off',

    /**
     * Require or disallow padding within blocks
     * @see http://eslint.org/docs/rules/padded-blocks
     * @fixable
     */
    'padded-blocks': 'off',

    /**
     * Require or disallow padding lines between statements
     * @see http://eslint.org/docs/rules/padding-line-between-statements
     * @fixable
     */
    'padding-line-between-statements': 'off',

    /**
     * Require quotes around object literal property names
     * @see http://eslint.org/docs/rules/quote-props
     * @fixable
     */
    'quote-props': 'off',

    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     * @see http://eslint.org/docs/rules/quotes
     * @fixable
     */
    quotes: 'off',

    /**
     * Require JSDoc comments
     * @see http://eslint.org/docs/rules/require-jsdoc
     */
    'require-jsdoc': [
      'off',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
        },
      },
    ],

    /**
     * Require or disallow semicolons instead of ASI
     * @see http://eslint.org/docs/rules/semi
     * @fixable
     */
    semi: 'off',

    /**
     * Enforce consistent spacing before and after semicolons
     * @see http://eslint.org/docs/rules/semi-spacing
     * @fixable
     */
    'semi-spacing': 'off',

    /**
     * Enforce location of semicolons
     * @see http://eslint.org/docs/rules/semi-style
     * @fixable
     */
    'semi-style': 'off',

    /**
     * Require object keys to be sorted
     * @see http://eslint.org/docs/rules/sort-keys
     */
    'sort-keys': 'off',

    /**
     * Require variables within the same declaration block to be sorted
     * @see http://eslint.org/docs/rules/sort-vars
     */
    'sort-vars': 'off',

    /**
     * Enforce consistent spacing before blocks
     * @see http://eslint.org/docs/rules/space-before-blocks
     * @fixable
     */
    'space-before-blocks': 'off',

    /**
     * Enforce consistent spacing before function definition opening parenthesis
     * @see http://eslint.org/docs/rules/space-before-function-paren
     * @fixable
     */
    'space-before-function-paren': 'off',

    /**
     * Enforce consistent spacing inside parentheses
     * @see http://eslint.org/docs/rules/space-in-parens
     * @fixable
     */
    'space-in-parens': 'off',

    /**
     * Require spacing around infix operators
     * @see http://eslint.org/docs/rules/space-infix-ops
     * @fixable
     */
    'space-infix-ops': 'off',

    /**
     * Enforce consistent spacing before or after unary operators
     * @see http://eslint.org/docs/rules/space-unary-ops
     * @fixable
     */
    'space-unary-ops': 'off',

    /**
     * Enforce consistent spacing after the // or /* in a comment
     * @see http://eslint.org/docs/rules/spaced-comment
     * @fixable
     */
    'spaced-comment': 'off',

    /**
     * Enforce spacing around colons of switch statements
     * @see http://eslint.org/docs/rules/switch-colon-spacing
     * @fixable
     */
    'switch-colon-spacing': 'off',

    /**
     * Require or disallow spacing between template tags and their literals
     * @see http://eslint.org/docs/rules/template-tag-spacing
     * @fixable
     */
    'template-tag-spacing': 'off',

    /**
     * Require or disallow Unicode byte order mark (BOM)
     * @see http://eslint.org/docs/rules/unicode-bom
     * @fixable
     */
    'unicode-bom': 'off',

    /**
     * Require parenthesis around regex literals
     * @see http://eslint.org/docs/rules/wrap-regex
     * @fixable
     */
    'wrap-regex': 'off',
  },
};

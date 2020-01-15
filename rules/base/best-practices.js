// @flow
module.exports = {
  /**
   * Best practice rules
   * @see http://eslint.org/docs/rules/#best-practices
   */
  rules: {
    /**
     * @see https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'warn',
    /**
     * @see https://eslint.org/docs/rules/no-setter-return
     */
    'no-setter-return': 'off',
    /**
     * @see https://eslint.org/docs/rules/prefer-exponentiation-operator
     */
    'prefer-exponentiation-operator': 'off',
    'grouped-accessor-pairs': 'off',
    /**
     * @see https://eslint.org/docs/rules/no-dupe-else-if
     */
    'no-dupe-else-if': 'warn',
    'no-async-promise-executor': 'error',
    'require-atomic-updates': 'off',
    'no-misleading-character-class': 'off',
    'require-unicode-regexp': 'off',
    /**
     * Enforce getter and setter pairs in objects
     * @see http://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'off',

    /**
     * Enforce return statements in callbacks of array methods
     * @see http://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': 'error',

    /**
     * Enforce the use of variables within the scope they are defined
     * @see http://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'error',

    /**
     * Enforce that class methods utilize this
     * @see http://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': 'off',

    /**
     * Enforce a maximum cyclomatic complexity allowed in a program
     * @see http://eslint.org/docs/rules/complexity
     */
    complexity: [
      'error',
      {
        max: 15,
      },
    ],

    /**
     * Require return statements to either always or never specify values
     * @see http://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
      },
    ],

    /**
     * Enforce consistent brace style for all control statements
     * @see http://eslint.org/docs/rules/curly
     * @fixable
     */
    curly: ['error', 'all'],

    /**
     * Require default cases in switch statements
     * @see http://eslint.org/docs/rules/default-case
     */
    'default-case': 'off',

    /**
     * Enforce consistent newlines before and after dots
     * @see http://eslint.org/docs/rules/dot-location
     * @fixable
     */
    'dot-location': 'off',

    /**
     * Enforce dot notation whenever possible
     * @see http://eslint.org/docs/rules/dot-notation
     * @fixable
     */
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPattern: '^[a-z]+(?:[_-s][a-z]+)+$',
      },
    ],

    /**
     * Require the use of === and !==
     * @see http://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: ['error', 'always'],

    /**
     * Require for-in loops to include an if statement
     * @see http://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'error',

    /**
     * Files containing multiple classes can often result in a less navigable
     * and poorly structured codebase. Best practice is to keep each file
     * limited to a single responsibility.
     * @see https://eslint.org/docs/5.0.0/rules/max-classes-per-file
     */
    'max-classes-per-file': ['error', 2],
    'max-lines-per-function': 'off',
    /**
     * When Object.assign is called using an object literal as the first argument,
     *  this rule requires using the object spread syntax instead. This rule also
     * warns on cases where an Object.assign call is made using a single argument
     * that is an object literal, in this case, the Object.assign call is not needed.
     * @see https://eslint.org/docs/5.0.0/rules/prefer-object-spread
     */
    'prefer-object-spread': 'error',
    /**
     * Disallow the use of alert, confirm, and prompt
     * @see http://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'off',

    /**
     * Disallow the use of arguments.caller or arguments.callee
     * @see http://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'error',

    /**
     * Disallow lexical declarations in case clauses
     * @see http://eslint.org/docs/rules/no-case-declarations
     */
    'no-case-declarations': 'error',

    /**
     * Disallow division operators explicitly at the beginning of regular expressions
     * @see http://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'error',

    /**
     * Disallow else blocks after return statements in if statements
     * @see http://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'off',

    /**
     * Disallow empty functions
     * @see http://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'off',

    /**
     * Disallow empty destructuring patterns
     * @see http://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',

    /**
     * Disallow null comparisons without type-checking operators
     * @see http://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': 'error',

    /**
     * Disallow the use of eval()
     * @see http://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',

    /**
     * Disallow extending native types
     * @see http://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'error',

    /**
     * Disallow unnecessary calls to .bind()
     * @see http://eslint.org/docs/rules/no-extra-bind
     * @fixable
     */
    'no-extra-bind': 'error',

    /**
     * Disallow unnecessary labels
     * @see http://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'error',

    /**
     * Disallow fallthrough of case statements
     * @see http://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /**
     * Disallow leading or trailing decimal points in numeric literals
     * @see http://eslint.org/docs/rules/no-floating-decimal
     * @fixable
     */
    'no-floating-decimal': 'off',

    /**
     * Disallow assignments to native objects or read-only global variables
     * @see http://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': 'error',

    /**
     * Disallow shorthand type conversions
     * @see http://eslint.org/docs/rules/no-implicit-coercion
     * @fixable
     */
    'no-implicit-coercion': 'off',

    /**
     * Disallow variable and function declarations in the global scope
     * @see http://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'error',

    /**
     * Disallow the use of eval()-like methods
     * @see http://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',

    /**
     * Disallow this keywords outside of classes or class-like objects
     * @see http://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': 'off',

    /**
     * Disallow the use of the __iterator__ property
     * @see http://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'error',

    /**
     * Disallow labeled statements
     * @see http://eslint.org/docs/rules/no-labels
     */
    'no-labels': 'error',

    /**
     * Disallow unnecessary nested blocks
     * @see http://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'error',

    /**
     * Disallow function declarations and expressions inside loop statements
     * @see http://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'error',

    /**
     * Disallow magic numbers
     * @see http://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': [
      'off',
      {
        ignoreArrayIndexes: false,
        detectObjects: true,
        enforceConst: true,
        ignore: [],
      },
    ],

    /**
     * Disallow multiple spaces
     * @see http://eslint.org/docs/rules/no-multi-spaces
     * @fixable
     */
    'no-multi-spaces': 'off',

    /**
     * Disallow multiline strings
     * @see http://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'error',

    /**
     * Disallow new operators with the Function object
     * @see http://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'error',

    /**
     * Disallow new operators with the String, Number, and Boolean objects
     * @see http://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /**
     * Disallow new operators outside of assignments or comparisons
     * @see http://eslint.org/docs/rules/no-new
     */
    'no-new': 'error',

    /**
     * Disallow octal escape sequences in string literals
     * @see http://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'error',

    /**
     * Disallow octal literals
     * @see http://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'error',

    /**
     * Disallow reassigning function parameters
     * @see http://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          // for reduce accumulators
          'acc',
          // for reduce accumulators
          'accumulator',
          // for e.returnvalue
          'e',
          // for Koa routing
          'ctx',
          // for Express requests
          'req',
          // for Express requests
          'request',
          // for Express responses
          'res',
          // for Express responses
          'response',
          // for ReactRouter context
          'staticContext',
        ],
      },
    ],

    /**
     * Disallow the use of the __proto__ property
     * @see http://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',

    /**
     * Disallow variable redeclaration
     * @see http://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': [
      'error',
      {
        builtinGlobals: false,
      },
    ],

    /**
     * Disallow certain properties on certain objects
     * @see http://eslint.org/docs/rules/no-restricted-properties
     */
    'no-restricted-properties': 'off',

    /**
     * Disallow assignment operators in return statements
     * @see http://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': ['error', 'always'],

    /**
     * Disallow unnecessary return await
     * @see http://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'off',

    /**
     * Disallow javascript: urls
     * @see http://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'error',

    /**
     * Disallow assignments where both sides are exactly the same
     * @see http://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': [
      'error',
      {
        props: false,
      },
    ],

    /**
     * Disallow comparisons where both sides are exactly the same
     * @see http://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',

    /**
     * Disallow comma operators
     * @see http://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',

    /**
     * Disallow throwing literals as exceptions
     * @see http://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'error',

    /**
     * Disallow unmodified loop conditions
     * @see http://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'error',

    /**
     * Disallow unused expressions
     * @see http://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
      },
    ],

    /**
     * Disallow unused labels
     * @see http://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',

    /**
     * Disallow unnecessary calls to .call() and .apply()
     * @see http://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'error',

    /**
     * Disallow unnecessary concatenation of literals or template literals
     * @see http://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',

    /**
     * Disallow unnecessary escape characters
     * @see http://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'error',

    /**
     * Disallow redundant return statements
     * @see http://eslint.org/docs/rules/no-useless-return
     * @fixable
     */
    'no-useless-return': 'error',

    /**
     * Disallow void operators
     * @see http://eslint.org/docs/rules/no-void
     */
    'no-void': 'error',

    /**
     * Disallow specified warning terms in comments
     * @see http://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': 'off',

    /**
     * Disallow with statements
     * @see http://eslint.org/docs/rules/no-with
     */
    'no-with': 'error',

    /**
     * Require using Error objects as Promise rejection reasons
     * @see http://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'error',

    /**
     * Enforce the consistent use of the radix argument when using parseInt()
     * @see http://eslint.org/docs/rules/radix
     */
    radix: ['error', 'always'],

    /**
     * Disallow async functions which have no await expression
     * (note: this is a horrible rule that should never be used)
     * @see http://eslint.org/docs/rules/require-await
     */
    'require-await': 'off',

    /**
     * Require var declarations be placed at the top of their containing scope
     * @see http://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': 'error',

    /**
     * Require parentheses around immediate function invocations
     * @see http://eslint.org/docs/rules/wrap-iife
     * @fixable
     */
    'wrap-iife': 'off',

    /**
     * Require or disallow “Yoda” conditions
     * @see http://eslint.org/docs/rules/yoda
     * @fixable
     */
    yoda: [
      'error',
      'never',
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],
  },
};

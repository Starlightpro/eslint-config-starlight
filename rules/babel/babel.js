module.exports = {
  /**
   * Babel Plugin rules
   * @see https://github.com/babel/eslint-plugin-babel
   */
  rules: {
    /**
     * Ignores capitalized decorators
     */
    'babel/new-cap': 'off',
    /**
     * Doesn't fail when inside class properties (class A { a = this.b; })
     */
    'babel/no-invalid-this': 2,
    /**
     * Doesn't complain about export x from "mod"; or export * as x from "mod";
     * @NOTE fixable
     * @NOTE Disabled for Prettier
     */
    'babel/object-curly-spacing': 'off',
    /**
     * Doesn't fail when using for await (let something of {}). Includes class properties
     * @NOTE fixable
     * @NOTE Disabled for Prettier
     */
    'babel/semi': 'off',

    // deprecated
    'babel/flow-object-type': 'off',
    'babel/no-await-in-loop': 'off',
    'babel/array-bracket-spacing': 'off',
    'babel/arrow-parens': 'off',
    'babel/func-params-comma-dangle': 'off',
    'babel/generator-star-spacing': 'off',
    'babel/object-shorthand': 'off',
  },
};

# `eslint-config-starlight`

> Eslint configurations for every situation.

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

All rules conflicting with [Prettier](https://github.com/prettier/prettier) are disabled.  

Documentation for **about 98%** of the Eslint rules is complete. You can find the rule explanations and a link to their eslint page above each rule definition.

**All eslint plugins are installed as dependencies**

## Plugins & Rulesets
Included by default:
- [`Babel`](https://github.com/babel/eslint-plugin-babel)   
- [`Prettier`](https://github.com/prettier/eslint-plugin-prettier)   

Opt-in Configurations
- [`Flowtype`](https://github.com/gajus/eslint-plugin-flowtype)
- [`Import`](https://github.com/benmosher/eslint-plugin-import)
- [`React`](https://github.com/yannickcr/eslint-plugin-react)
- [`jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)

### Opt-In Configs
Enabling one (or all) opt-in configurations
----
Simply extend the config you'd like to include, like below.
```JSON
{
  "extends": [
    "@starlightpro/eslint-config-starlight",
    "@starlightpro/eslint-config-starlight/react",
    "@starlightpro/eslint-config-starlight/flowtype",
    "@starlightpro/eslint-config-starlight/jsx-a11y",
    "@starlightpro/eslint-config-starlight/import",
    "@starlightpro/eslint-config-starlight/promise"
  ]
}
```


Feel free to extend or submit comments / corrections.


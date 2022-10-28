<div align="center">
<h1>@starlightpro/eslint-config-starlight</h1>

<p>ESLint rules for every situation</p>
</div>

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Other configs](#other-configs)
  - [Things to know](#things-to-know)

## Installation

This module is distributed via npm which is bundled with node and should be installed as one of your
project's `devDependencies`:

```sh
npm install --save-dev @starlightpro/eslint-config-starlight
```

This library has a required `peerDependencies` listing for eslint

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: '@starlightpro/eslint-config-starlight',
  rules: {
    // your overrides
  },
};
```

### Other configs

This config also exposes a few other configs that we use often and pull in as needed. They are:

- `@starlightpro/eslint-config-starlight/react`
- `@starlightpro/eslint-config-starlight/jest`
- `@starlightpro/eslint-config-starlight/jsx-a11y`

You can use them standalone:

```javascript
module.exports = {
  extends: '@starlightpro/eslint-config-starlight/<config-name>',
};
```

Or in combination with the base config (recommended)

```javascript
module.exports = {
  extends: [
    '@starlightpro/eslint-config-starlight',
    '@starlightpro/eslint-config-starlight/<config-name>',
  ],
};
```

### Things to know

- All plugins needed for rules used by these configs are dependencies of this module so you don't
  have to install anything on your own.
- The default config actually is composed of several configurations and you can use those
  individually.

#### Example of customized config

```javascript
module.exports = {
  extends: [
    '@starlightpro/eslint-config-starlight/import',
    '@starlightpro/eslint-config-starlight/jest',
  ],
  rules: {
    /* custom rules */
  },
};
```

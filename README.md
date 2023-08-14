# eslint-plugin-data-cy

A VUE ESLint plugin to enforce the presence of `data-cy` attribute on configured components.

## Installation

Choose one:

```bash
npm install eslint-plugin-data-cy --save-dev
yarn add eslint-plugin-data-cy --dev
pnpm add eslint-plugin-data-cy -D
```

## Usage

Add data-cy to the plugins section of your .eslintrc configuration file:

```json
{
  "plugins": ["data-cy"]
}
```

## Supported Rules

```js
{
    rules: {
      'data-cy/vue-enforce-data-cy': [
        'warn',
        {
          components: ['MyCheckbox', 'MyButton'],
          testAttributes: ['data-cy', 'v-data-cy'],
        },
      ]
    }
}
```

License
MIT

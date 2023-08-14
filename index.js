module.exports = {
  rules: {
    'vue-enforce-data-cy': require('./rules/vue-enforce-data-cy'),
  },
  configs: {
    recommended: {
      plugins: ['data-cy'],
      rules: {
        'data-cy/vue-enforce-data-cy': 'error',
      },
    },
  },
};

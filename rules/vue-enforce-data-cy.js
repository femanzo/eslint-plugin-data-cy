module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
    },
  ],
  meta: {
    type: 'problem',
    docs: {
      description: 'enforce data-cy attribute on configured components',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          testAttributes: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          components: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    const config = context.options[0] || {};
    const validAttributes = config.testAttributes || ['data-cy'];
    const validComponents = config.components || [];

    return context.parserServices.defineTemplateBodyVisitor({
      VElement(node) {
        if (validComponents.indexOf(node.rawName) === -1) return;

        const hasDataCyAttribute = node.startTag.attributes.some(
          (attribute) => {
            if (attribute.directive) {
              return validAttributes.indexOf(attribute.key.name.name) > -1;
            }

            return validAttributes.indexOf(attribute.key.name) > -1;
          },
        );

        if (!hasDataCyAttribute) {
          context.report({
            node: node.startTag,
            message: `Vue components should have a valid attribute for e2e testing. ${validAttributes.join()}`,
          });
        }
      },
    });
  },
};

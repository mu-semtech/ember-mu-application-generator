/* eslint-env node */
module.exports = {
  description: 'Generates the with-rdfa-prefixes-and-vocab component which wraps the full page.  Supply the vocab as the first argument, and prefix:uri as the rest arguments.',

  anonymousOptions: [
    'vocab',
    'prefix:uri'
  ],

  normalizeEntityName: function() {},

  locals(options) {
    const entity = options.entity;

    // Return custom template variables here.
    return {
      vocab: entity.name,
      prefixString: Object.keys( entity.options ).map( (prefix) => {
        return `${prefix}:${entity.options[prefix]}`;
      } ).join(" ")
    };
  }
};

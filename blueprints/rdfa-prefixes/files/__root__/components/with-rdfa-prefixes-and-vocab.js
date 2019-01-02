import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  attributeBindings: ["vocab", "prefixes"],
  vocab: computed( function() {
    const vocab="<%= vocab %>"; // generated
    return vocab != "" && vocab;
  }),
  prefixes: computed( function() {
    const prefixes = "<%= prefixString %>"; // generated
    return prefixes != "" && prefixes;
  })
});

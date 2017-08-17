import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-attribute-string-set', 'Integration | Component | edit attribute string set', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-attribute-string-set}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit-attribute-string-set}}
      template block text
    {{/edit-attribute-string-set}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
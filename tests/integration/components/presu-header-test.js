import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('presu-header', 'Integration | Component | presu header', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{presu-header}}`);

  assert.ok(this.$().text(), 'Contiene texto');
});

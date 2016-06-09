import Ember from 'ember';
import AccountingInitializer from 'presu/initializers/accounting';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | accounting', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AccountingInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

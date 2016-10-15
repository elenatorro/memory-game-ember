import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('card', 'Unit | Model | card', {
  needs: []
});

test('it should have a card model', function(assert) {
  let model, name, meta;

  model = this.subject();
  name = 'card-name';
  meta = {};

  Ember.run(() => {
    model.setProperties({name, meta});
  });

  assert.equal(model.get('name'), name, 'it should have a correct name attribute');
  assert.equal(model.get('meta'), meta, 'it should have a correct meta attribute');
});

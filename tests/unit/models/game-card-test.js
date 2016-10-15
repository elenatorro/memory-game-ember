import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('game-card', 'Unit | Model | game', {
  needs: [
    'model:game'
  ]
});

test('it should have a game model', function(assert) {
  let model, name;

  model = this.subject();
  name = 'card-name';

  Ember.run(() => {
    model.setProperties({name});
  });

  assert.equal(model.get('name'), name, 'it should have a correct name attribute');
});

import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('game', 'Unit | Model | game', {
  needs: [
    'model:game-card'
  ]
});

test('it should have a game model', function(assert) {
  let model, level;

  model = this.subject();
  level = 'game';

  Ember.run(() => {
    model.setProperties({level});
  });

  assert.equal(model.get('level'), level, 'it should have a correct level attribute');
});

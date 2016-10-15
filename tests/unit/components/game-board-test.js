import {moduleForComponent, test} from 'ember-qunit';

moduleForComponent('game-board', 'Unit | Component | game-board', {
  needs: ['component:game-card'],
  unit: true
});

test('it should render', function(assert) {
  let _component = this.subject();
  assert.ok(_component);
});

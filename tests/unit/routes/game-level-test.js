import E from 'ember';
import {moduleFor, test} from 'ember-qunit';
import startApp from 'memory-game/tests/helpers/start-app';

var App, AppInstance, GameLevelRoute;

moduleFor('route:game.level', 'Unit | Route | game.level', {
  needs: ['service:route', 'service:store', 'service:api', 'service:i18n'],

  beforeEach() {
    App            = startApp();
    AppInstance    = App.buildInstance();
    GameLevelRoute = this.subject();
  },
  afterEach() {
    E.run(App, 'destroy');
  }
});

test('it should have a game level route', function(assert) {
  assert.ok(GameLevelRoute, 'it should have a game level route');
});

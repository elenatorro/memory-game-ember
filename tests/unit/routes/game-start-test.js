import E from 'ember';
import {moduleFor, test} from 'ember-qunit';
import startApp from 'memory-game/tests/helpers/start-app';

var App, AppInstance, GameStartRoute;

moduleFor('route:game.start', 'Unit | Route | game.start', {
  needs: ['service:route', 'service:store', 'service:api', 'service:i18n'],

  beforeEach() {
    App             = startApp();
    AppInstance     = App.buildInstance();
    GameStartRoute  = this.subject();
  },
  afterEach() {
    E.run(App, 'destroy');
  }
});

test('it should have a game start route', function(assert) {
  assert.ok(GameStartRoute, 'it should have a game start route');
});

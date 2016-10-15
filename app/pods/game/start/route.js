import Ember from 'ember';
import {Game} from 'memory-game/constants/game';

export default Ember.Route.extend({
  model() {
    return {
      levels: Game.LEVELS
    };
  },

  actions: {
    goToLevel(levelName) {
      if (!!Game.Level[levelName]) {
        this.transitionTo('game.level', levelName);
      }
    }
  }
});

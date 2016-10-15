import Ember from 'ember';
import {Utils} from 'memory-game/utils/utils';

export default Ember.Service.extend({
  storeService: Ember.inject.service('store'),

  getCards() {
    var hash;

    hash = {
      cards: this.get('storeService').getCards()
    };

    return Ember.RSVP.hash(hash).then((hash) => {
      return hash;
    });
  },

  getGame(level) {
    var hash;

    hash = {
      game: this.get('storeService').getGame(level)
    };

    return Ember.RSVP.hash(hash).then((hash) => {
      var gameCards;

      gameCards = Utils.setArray(hash.game.get('gameCards'))
        .shuffleArray()
        .getArray();

      hash.game.setProperties({gameCards});
      return hash;
    });
  }
});

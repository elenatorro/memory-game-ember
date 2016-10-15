import Ember from 'ember';
import ENV from 'memory-game/config/environment';
import {GameCards} from 'memory-game/constants/game-cards';

export default Ember.Service.extend({
  storeService: Ember.inject.service('store'),
  apiService: Ember.inject.service('api'),

  getCards() {
    return ENV.useApi ? _getCardsFromApi.call(this) : _getCardsFromConstantFile.call(this);
  },

  setStoreData(cards) {
    this.get('storeService').setCards(cards);
    this.get('storeService').initGames(cards);
    return Ember.RSVP.Promise.resolve(cards);
  }
});

/* Private */

function _getCardsFromApi() {
  return this.get('apiService').getCards()
    .then((response) => this.setStoreData(response.cards))
    .catch((reason) => Ember.RSVP.Promise.reject(reason));
}

function _getCardsFromConstantFile() {
  return this.setStoreData(GameCards.cards);
}

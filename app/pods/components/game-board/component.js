import Ember from 'ember';
import {Game} from 'memory-game/constants/game';

export default Ember.Component.extend({
  classNames: ['mg-game'],
  tagName: 'div',

  // Model
  game: null,
  turnedCard: null,

  isFinished: Ember.observer('game.gameCards.@each.isPaired', function() {
    this.set('game.isFinished', _isGameFinished.call(this));
  }),

  actions: {
    cardHasBeenTurned(card) {
      var turnedCard;

      turnedCard = this.get('turnedCard');
      if (!!turnedCard) {
        this.set('game.isLocked', true);
        _checkPairAndResetGame.call(this, card, turnedCard);
      } else {
        this.set('turnedCard', card);
      }
    }
  }
});

/* Private */
function _checkPairAndResetGame(card1, card2) {
  _setPairedCardsIfIsPair.call(this, card1, card2);
  _resetGame.call(this, card1, card2);
}

function _setPairedCardsIfIsPair(card1, card2) {
  return _isPair.call(this, card1, card2) ?
    _pairCards.call(this, card1, card2)
    : _turnCards.call(this, card1, card2);
}

function _isPair(card1, card2) {
  return card1.get('name') === card2.get('name');
}

function _isGameFinished() {
  return this.get('game.gameCards').rejectBy('isPaired', true).length === 0;
}

function _resetGame() {
  this.set('turnedCard', null);
  this.set('game.isLocked', false);
}

function _pairCards(card1, card2) {
  card1.toggleProperty('isPaired');
  card2.toggleProperty('isPaired');
}

function _turnCards(card1, card2) {
  Ember.run.later(
    this, () => {
      card1.set('isTurned', false);
      card2.set('isTurned', false);
    },
    Game.TURN_ANIMATION_DELAY_MILISECONDS);
}

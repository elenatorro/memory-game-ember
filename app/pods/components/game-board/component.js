import Ember from 'ember';
import {Game} from 'memory-game/constants/game';

const {
  Component,
  run: { later }
} = Ember;

export default Component.extend({
  classNames: ['mg-game'],
  tagName: 'div',

  // Model
  game: null,
  turnedCard: null,

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

function _resetGame() {
  this.set('turnedCard', null);
  this.set('game.isLocked', false);
}

function _pairCards(card1, card2) {
  card1.toggleProperty('isPaired');
  card2.toggleProperty('isPaired');
}

function _turnCards(card1, card2) {
  later(
    this, () => {
      card1.set('isTurned', false);
      card2.set('isTurned', false);
    },
    Game.TURN_ANIMATION_DELAY_MILISECONDS);
}

import Ember from 'ember';
import DS from 'ember-data';
import {Model} from 'memory-game/constants/store';
import {Utils} from 'memory-game/utils/utils';
import {Game} from 'memory-game/constants/game';
import {v1} from "ember-uuid";

export default DS.Store.extend({
  getCards() {
    var cards;

    cards = this.peekAll(Model.CARD);
    return Ember.RSVP.Promise.resolve(cards);
  },

  setCard(card) {
    this.push(this.normalize(Model.CARD, card));
  },

  setCards(cards) {
    cards.forEach((card) => this.setCard(card));
  },

  setGameCard(game, card) {
    var gameCard;

    gameCard = {
      name:     card.get('name'),
      meta:     card.get('meta'),
      isPaired: false,
      isTurned: false,
      game:     game,
      UUID:     v1()
    };

    this.push(this.normalize(Model.GAME_CARD, gameCard));
  },

  initGames() {
    this.resetGames();
    this.getCards()
      .then((cards) => {
        Game.LEVELS.forEach((level) => {
          this.newGame(level, cards);
        });
      });
  },

  resetGames() {
    this.unloadAll(Model.GAME);
    this.unloadAll(Model.GAME_CARD);
  },

  newGame(level, cards) {
    var game, gameCards;

    gameCards = Utils.setArray(cards)
      .shuffleArray()
      .getNElement(Game.Level[level].CARDS_NUMBER)
      .getArray()
      .forEach((card) => {
        if (card) {
          this.setGameCard(level, card);
          this.setGameCard(level, card);
        }
      });

    game = {
      level:      level,
      gameCards:  gameCards,
      isFinished: false,
      isLocked:   false
    };

    this.push(this.normalize(Model.GAME, game));
  },

  getGame(level) {
    var game;

    game = this.peekRecord(Model.GAME, level);
    return Ember.RSVP.Promise.resolve(game);
  },

  removeGame(game) {
    this.deleteRecord(game);
  }
});

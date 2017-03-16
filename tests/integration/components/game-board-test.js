import Ember from 'ember';
import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import {Game} from 'memory-game/constants/game';
import startApp from 'memory-game/tests/helpers/start-app';
import setupGames from 'memory-game/tests/helpers/setup-games';

var app, appInstance;
moduleForComponent('game-board', 'Integration | Component | game-board', {
  integration: true,

  beforeEach() {
    app = startApp();
    appInstance = app.buildInstance();
    setupGames(this);
  },

  afterEach() {
    Ember.run(app, 'destroy');
  }
});

/* FIXME */
// test('it should be able display the different game levels', function(assert) {
//   var done, _gameBoard, _gameCards;
//
//   done = assert.async(3);
//
//   this.setProperties({game});
//   this.render(hbs`{{game-board game=game}}`);
//
//   _gameBoard = this.$('.mg-game').eq(0);
//   assert.ok(_gameBoard);
//
//   _gameCards = this.$('.mg-game-card-flip-container');
//   assert.ok(_gameCards);
//   assert.equal(_gameCards.length, Game.Level[level].CARDS_NUMBER * 2, `it should have the level ${level} with ${Game.Level[level].CARDS_NUMBER * 2} cards`);
//   done();
// });
//
// test('it should be able to set a pair if it is a pair', function(assert) {
//   var done, gameCards, turnedCard, _gameCards;
//
//   done = assert.async();
//
//   storeService.getGame(Game.Level.easy.NAME)
//     .then((game) => {
//       gameCards = game.get('gameCards');
//
//       this.setProperties({game, turnedCard});
//
//       this.render(hbs`{{game-board game=game turnedCard=turnedCard}}`);
//
//       _gameCards = this.$('.mg-game-card-flipper');
//
//       assert.notOk(this.get('turnedCard'), 'it should not have turned card');
//
//       _gameCards.eq(0).click();
//       assert.ok(this.get('turnedCard'), 'it should have saved the turned card');
//       assert.ok(this.get('game.gameCards').objectAt(0).get('isTurned'));
//
//       _gameCards.eq(1).click();
//       assert.ok(this.get('game.gameCards').objectAt(1).get('isTurned'));
//
//       Ember.run.later(this, () => {
//         assert.ok(this.get('game.gameCards').objectAt(0).get('isTurned'));
//         assert.ok(this.get('game.gameCards').objectAt(1).get('isTurned'));
//         assert.ok(this.get('game.gameCards').objectAt(0).get('isPaired'));
//         assert.ok(this.get('game.gameCards').objectAt(1).get('isPaired'));
//         done();
//
//       }, Game.TURN_ANIMATION_DELAY_MILISECONDS);
//     });
// });
//
// test('it should be able to reject a pair if it is not a pair', function(assert) {
//   var done, gameCards, turnedCard, _gameCards;
//
//   done = assert.async();
//
//   storeService.getGame(Game.Level.easy.NAME)
//     .then((game) => {
//       gameCards = game.get('gameCards');
//
//       this.setProperties({game, turnedCard});
//
//       this.render(hbs`{{game-board game=game turnedCard=turnedCard}}`);
//
//       _gameCards = this.$('.mg-game-card-flipper');
//
//       assert.notOk(this.get('turnedCard'), 'it should not have turned card');
//
//       _gameCards.eq(0).click();
//       assert.ok(this.get('turnedCard'), 'it should have saved the turned card');
//       assert.ok(this.get('game.gameCards').objectAt(0).get('isTurned'));
//
//       _gameCards.eq(2).click();
//       assert.ok(this.get('game.gameCards').objectAt(2).get('isTurned'));
//
//       Ember.run.later(this, () => {
//         assert.notOk(this.get('game.gameCards').objectAt(0).get('isTurned'));
//         assert.notOk(this.get('game.gameCards').objectAt(2).get('isTurned'));
//         done();
//       }, Game.TURN_ANIMATION_DELAY_MILISECONDS);
//     });
// });
//
// test('it should be able finish a game', function(assert) {
//   var done, gameCards, turnedCard, _gameCards, cardHasBeenTurned;
//
//   done = assert.async();
//   storeService.getGame(Game.Level.easy.NAME)
//     .then((game) => {
//       gameCards = game.get('gameCards');
//
//       this.setProperties({game, turnedCard, cardHasBeenTurned});
//
//       this.render(hbs`{{game-board game=game turnedCard=turnedCard}}`);
//
//       _gameCards = this.$('.mg-game-card-flipper');
//
//       assert.notOk(this.get('turnedCard'), 'it should not have turned card');
//
//       _gameCards.eq(0).click();
//       assert.ok(this.get('turnedCard'), 'it should have saved the turned card');
//       assert.ok(this.get('game.gameCards').objectAt(0).get('isTurned'));
//
//       _gameCards.eq(1).click();
//       assert.ok(this.get('game.gameCards').objectAt(1).get('isTurned'));
//       assert.ok(this.get('game.gameCards').objectAt(0).get('isPaired'));
//       assert.ok(this.get('game.gameCards').objectAt(1).get('isPaired'));
//
//       _gameCards.eq(2).click();
//       _gameCards.eq(3).click();
//       assert.ok(this.get('game.gameCards').objectAt(2).get('isPaired'));
//       assert.ok(this.get('game.gameCards').objectAt(3).get('isPaired'));
//       assert.ok(this.get('game.isFinished'), 'it should be finished if all the cards are paired');
//       done();
//     });
// });

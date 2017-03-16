import Ember from 'ember';
import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

import startApp from 'memory-game/tests/helpers/start-app';
import setupGames from 'memory-game/tests/helpers/setup-games';

import { Game } from 'memory-game/constants/game';
import { Card } from 'memory-game/constants/cards';
import localesEN from 'memory-game/locales/en/translations';
import localesES from 'memory-game/locales/es/translations';

var app, appInstance;
moduleForComponent('game-card', 'Integration | Component | game-card', {
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

test('it should be able display a game card', function(assert) {
  var done, name, game, card, _gameCard, _gameCardBackText, _gameCardFrontText, _gameCardBackImage, _gameCardFrontImage, _changeToSpanishButton;

  done = assert.async();
  name = 'alpaca';

  Ember.run(() => {
    game = Game.LEVELS[0];

    card = Ember.Object.extend({}).create({
      name: name,
      meta: {}
    });

    this.setProperties({card});
    this.render(hbs`{{game-card card=card}}{{change-locale}}`);

    _gameCard = this.$('.mg-game-card-flipper').eq(0);
    _gameCardBackText = this.$('.mg-game-card-text').eq(0);
    _gameCardFrontText = this.$('.mg-game-card-text').eq(1);
    _gameCardBackImage = this.$('.mg-game-card-image img').eq(0);
    _gameCardFrontImage = this.$('.mg-game-card-image img').eq(1);
    _changeToSpanishButton = this.$('li a').eq(1);


    assert.ok(_gameCard);
    assert.equal(_gameCardBackText.text().trim(), localesEN.components.gameCard.template.cards[name]);
    assert.equal(_gameCardFrontText.text().trim(), localesEN.application.title);

    assert.equal(_gameCardBackImage.prop('src'), `${window.location.origin}/assets/images/${name}.png`);
    assert.equal(_gameCardFrontImage.prop('src'), `${window.location.origin}/assets/images/${Card.BACK_IMAGE_NAME}.png`);

    _changeToSpanishButton.click();
    _gameCardBackText = this.$('.mg-game-card-text').eq(0);
    _gameCardFrontText = this.$('.mg-game-card-text').eq(1);
    assert.equal(_gameCardBackText.text().trim(), localesES.components.gameCard.template.cards[name]);
    assert.equal(_gameCardFrontText.text().trim(), localesES.application.title);

    _gameCard.click();
    assert.ok(this.get('card.isTurned'));
    done();
  });

});

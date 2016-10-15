import Ember from 'ember';
import {Card} from 'memory-game/constants/cards';
import {Game} from 'memory-game/constants/game';

export default Ember.Component.extend({
  classNameBindings: [
    'isEasy:mg-game-card-flip-container-easy',
    'isMedium:mg-game-card-flip-container-medium',
    'isDifficult:mg-game-card-flip-container-difficult'
  ],
  classNames: ['mg-game-card-flip-container'],
  tagName: 'div',

  // Model
  card: null,
  isGameLocked: null,

  isSelectable: Ember.computed('card.isPaired', 'card.isTurned', 'isGameLocked', function() {
    return !(this.get('card.isTurned') || this.get('card.isPaired') || this.get('isGameLocked'));
  }),

  isEasy:      Ember.computed.equal('card.game.level', Game.Level.easy.NAME),
  isMedium:    Ember.computed.equal('card.game.level', Game.Level.medium.NAME),
  isDifficult: Ember.computed.equal('card.game.level', Game.Level.difficult.NAME),

  cardNameLocale: Ember.computed('card.name', function() {
    return `components.gameCard.template.cards.${this.get('card.name')}`;
  }),

  cardFrontImageURL: Ember.computed('card', function() {
    return `/assets/images/${this.get('card.name')}.png`;
  }),

  cardBackImageURL: Ember.computed('card', function() {
    return `/assets/images/${Card.BACK_IMAGE_NAME}.png`;
  }),

  actions: {
    selectCard() {
      if (this.get('isSelectable')) {
        this.toggleProperty('card.isTurned');
        this.sendAction('on-card-is-turned', this.get('card'));
      }
    }
  }
});

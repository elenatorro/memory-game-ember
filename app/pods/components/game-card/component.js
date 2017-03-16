import Ember from 'ember';
import {Card} from 'memory-game/constants/cards';
import {Game} from 'memory-game/constants/game';
import ENV from 'memory-game/config/environment';

const {
  Component,
  computed,
  computed: { equal }
} = Ember;

export default Component.extend({
  classNameBindings: [
    'isEasy:mg-game-card-flip-container-easy',
    'isMedium:mg-game-card-flip-container-medium',
    'isHard:mg-game-card-flip-container-hard'
  ],
  classNames: ['mg-game-card-flip-container'],
  tagName: 'div',

  // Model
  card: null,
  isGameLocked: null,

  isSelectable: computed('card.isPaired', 'card.isTurned', 'isGameLocked',
    function() {
    return !(this.get('card.isTurned') ||
             this.get('card.isPaired') ||
             this.get('isGameLocked'));
  }),

  isEasy: equal('card.game.level', Game.Level.easy.NAME),
  isMedium: equal('card.game.level', Game.Level.medium.NAME),
  isHard: equal('card.game.level', Game.Level.hard.NAME),

  cardNameLocale: computed('card.name', function() {
    return `components.gameCard.template.cards.${this.get('card.name')}`;
  }),

  cardFrontImageURL: computed('card', function() {
    return `${ENV.rootURL}assets/images/${this.get('card.name')}.png`;
  }),

  cardBackImageURL: computed('card', function() {
    return `${ENV.rootURL}assets/images/${Card.BACK_IMAGE_NAME}.png`;
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

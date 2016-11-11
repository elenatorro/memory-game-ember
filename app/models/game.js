import Ember from 'ember';
import DS from 'ember-data';
import { Game } from 'memory-game/constants/game';
import {ArrayUtils} from 'memory-game/utils/array-utils';

const {
  attr,
  hasMany,
  Model
} = DS;

const {
  computed
} = Ember;

export default Model.extend({
  level:      attr('string'),
  isLocked:   attr('boolean'),
  gameCards:  hasMany('game-card'),

  isFinished: computed('gameCards.@each.isPaired', {
    get() {
      return this.get('gameCards').isEvery('isPaired', true);
    }
  }),

  spawnCards() {
    const cardsNumber = Game.Level[this.get('level')].CARDS_NUMBER;

    const cards = ArrayUtils.sample(this.store.peekAll('card'), cardsNumber);

    let gameCards = ArrayUtils.shuffle(cards.concat(cards)).map((card) => {
        return this.store.createRecord('gameCard', {
          game: this,
          name: card.get('name'),
          meta: card.get('meta')
        });
    });
    this.set('gameCards', gameCards);
  }

});

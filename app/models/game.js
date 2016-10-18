import DS from 'ember-data';
import { Game } from 'memory-game/constants/game';

const {
  attr,
  hasMany,
  Model
} = DS;

export default Model.extend({
  level:      attr('string'),
  isFinished: attr('boolean'),
  isLocked:   attr('boolean'),
  gameCards:  hasMany('game-card'),

  spawnCards() {
    const cardsNumber = Game.Level[this.get('level')].CARDS_NUMBER;

    const cards = this.store.peekAll('card').toArray().sample(cardsNumber / 2);

    let gameCards = cards.concat(cards).shuffle().map((card) => {
        return this.store.createRecord('gameCard', {
          game: this,
          name: card.get('name'),
          meta: card.get('meta')
        });
    });
    this.set('gameCards', gameCards);
  }

});

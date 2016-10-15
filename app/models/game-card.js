import DS from 'ember-data';
import CardModel from 'memory-game/models/card';

export default CardModel.extend({
  UUID:     DS.attr('string'),
  game:     DS.belongsTo('game'),
  isTurned: DS.attr('boolean'),
  isPaired: DS.attr('boolean')
});

import DS from 'ember-data';
import CardModel from './card';

const {
  attr,
  belongsTo
} = DS;

export default CardModel.extend({
  game:     belongsTo('game'),
  isTurned: attr('boolean'),
  isPaired: attr('boolean')
});

import DS from 'ember-data';

export default DS.Model.extend({
  level:      DS.attr('string'),
  isFinished: DS.attr('boolean'),
  isLocked:   DS.attr('boolean'),
  gameCards:  DS.hasMany('game-card', { async: true })
});

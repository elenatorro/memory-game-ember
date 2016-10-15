import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  primaryKey: 'level',
  normalize() {
    return this._super(...arguments);
  }
});

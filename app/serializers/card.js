import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  primaryKey: 'name',
  normalize() {
    return this._super(...arguments);
  }
});

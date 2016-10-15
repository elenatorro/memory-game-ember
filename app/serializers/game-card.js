import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
  primaryKey: 'UUID',
  normalize() {
    return this._super(...arguments);
  }
});

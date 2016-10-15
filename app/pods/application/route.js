import Ember from 'ember';

export default Ember.Route.extend({
  cardService: Ember.inject.service('card'),

  beforeModel() {
    return this.get('cardService').getCards();
  },

  actions: {
    goToIndex() {
      this.transitionTo('index');
    }
  }
});

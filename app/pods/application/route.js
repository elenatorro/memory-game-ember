import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({
  beforeModel() {
    return this.store.findAll('card');
  },

  actions: {
    goToIndex() {
      this.transitionTo('index');
    }
  }
});

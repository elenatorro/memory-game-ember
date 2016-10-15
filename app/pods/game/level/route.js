import Ember from 'ember';

export default Ember.Route.extend({
  routeService: Ember.inject.service('route'),
  storeService: Ember.inject.service('store'),

  beforeModel() {
    this.get('storeService').initGames();
  },

  model(level) {
    return this.get('routeService').getGame(level.level_name);
  },

  afterModel(model) {
    if (!model.game.get('gameCards.length')) {
      this.transitionTo('game.start');
    }
  },

  actions: {
    goBack() {
      this.transitionTo('game.start');
    }
  }
});

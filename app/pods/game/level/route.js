import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  model(params) {

    const game = this.store.createRecord('game', {
      level: params.level_name
    });

    game.spawnCards();

    return game;
  },

  afterModel(model) {
    if (!model.get('gameCards.length')) {
      this.transitionTo('game.start');
    }
  },

  actions: {
    goBack() {
      this.transitionTo('game.start');
    }
  }
});

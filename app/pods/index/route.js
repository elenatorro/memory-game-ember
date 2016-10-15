import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    goToStartGame() {
      this.transitionTo('game.start');
    }
  }
});

import Ember from 'ember';
import ENV from 'memory-game/config/environment';

export default Ember.Component.extend({
  classNames: ['mg-nav-sidebar', 'deep-orange', 'accent-3'],
  tagName: 'nav',

  logoImage: `${ENV.rootURL}assets/images/brainstorming.png`,

  actions: {
    goToIndex() {
      this.sendAction('on-go-to-index');
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['mg-nav-sidebar', 'deep-orange', 'accent-3'],
  tagName: 'nav',

  actions: {
    goToIndex() {
      this.sendAction('on-go-to-index');
    }
  }
});

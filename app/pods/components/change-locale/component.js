import Ember from 'ember';
import Elm from 'memory-game/elm-modules';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  language: 'ES',

  setupElm: Ember.on('init', function() {
    this.set('Elm', Elm);
  }),

  changeLocale(locale) {
    this.set('i18n.locale', locale);
  },

  actions: {
    changeLocale(ports) {
      ports.changeLocale.subscribe(this.get('changeLocale').bind(this));
    }
  }
});

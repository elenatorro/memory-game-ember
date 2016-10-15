import Ember from 'ember';
import {Locales} from 'memory-game/constants/locales';

export default Ember.Component.extend({
  i18nService: Ember.inject.service('i18n'),
  tagName: 'ul',

  actions: {
    changeTo(locale) {
      if (!!Locales[locale]) {
        this.set('i18nService.locale', locale);
      }
    }
  }
});

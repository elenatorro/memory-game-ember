import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  tagName: 'span',

  // Model
  name: null,
  locales: {},

  levelNameLocale: computed('name', function() {
    return `components.levelName.template.${this.get('name')}`;
  })
});

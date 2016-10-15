import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  // Model
  name: null,
  locales: {},

  levelNameLocale: Ember.computed('name', function() {
    return `components.levelName.template.${this.get('name')}`;
  })
});

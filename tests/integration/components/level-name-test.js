import {moduleForComponent, test} from 'ember-qunit';
import {Game} from 'memory-game/constants/game';
import localesEN from 'memory-game/locales/en/translations';
import localesES from 'memory-game/locales/es/translations';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('change-locale', 'Integration | Component | change-locale', {
  integration: true
});

test('it should be able to display the level name', function(assert) {
  var name, _levelName, _changeToEnglishButton, _changeToSpanishButton;

  name = Game.LEVELS[0];

  this.setProperties({name});
  this.render(hbs`{{change-locale}}{{level-name name=name}}`);

  _levelName = this.$('span').eq(0);
  _changeToEnglishButton = this.$('li a').eq(0);
  _changeToSpanishButton = this.$('li a').eq(1);

  assert.equal(_levelName.text().trim(), localesEN.components.levelName.template[name]);
  _changeToSpanishButton.click();
  assert.equal(_levelName.text().trim(), localesES.components.levelName.template[name]);
});

'use strict';

define('memory-game/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('memory-game/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('memory-game/tests/constants/api.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/api.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/api.js should pass jshint.');
  });
});
define('memory-game/tests/constants/cards.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/cards.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/cards.js should pass jshint.');
  });
});
define('memory-game/tests/constants/game-cards.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/game-cards.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/game-cards.js should pass jshint.');
  });
});
define('memory-game/tests/constants/game.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/game.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/game.js should pass jshint.');
  });
});
define('memory-game/tests/constants/locales.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/locales.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/locales.js should pass jshint.');
  });
});
define('memory-game/tests/constants/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | constants/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'constants/store.js should pass jshint.');
  });
});
define('memory-game/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('memory-game/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('memory-game/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('memory-game/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'memory-game/tests/helpers/start-app', 'memory-game/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _memoryGameTestsHelpersStartApp, _memoryGameTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _memoryGameTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _memoryGameTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('memory-game/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('memory-game/tests/helpers/resolver', ['exports', 'memory-game/resolver', 'memory-game/config/environment'], function (exports, _memoryGameResolver, _memoryGameConfigEnvironment) {

  var resolver = _memoryGameResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _memoryGameConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _memoryGameConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('memory-game/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('memory-game/tests/helpers/setup-games', ['exports', 'memory-game/services/store', 'memory-game/services/card', 'ember-i18n/helper'], function (exports, _memoryGameServicesStore, _memoryGameServicesCard, _emberI18nHelper) {

  function setupGames(appInstance) {
    try {
      appInstance.registry.register('service:store', _memoryGameServicesStore['default'], { instantiate: true });
      appInstance.container.registry.injection('route:application', 'storeService', 'service:store');
      appInstance.container.lookup('service:store');

      appInstance.registry.register('service:card', _memoryGameServicesCard['default'], { instantiate: true });
      appInstance.container.registry.injection('route:application', 'cardService', 'service:card');
      appInstance.container.lookup('service:card');

      appInstance.container.lookup('service:i18n').set('locale', 'en');
      appInstance.registry.register('helper:t', _emberI18nHelper['default']);
    } catch (reason) {
      console.warn({ reason: reason });
    }
  }

  exports['default'] = setupGames;
});
define('memory-game/tests/helpers/setup-games.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/setup-games.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/setup-games.js should pass jshint.');
  });
});
define('memory-game/tests/helpers/start-app', ['exports', 'ember', 'memory-game/app', 'memory-game/config/environment'], function (exports, _ember, _memoryGameApp, _memoryGameConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _memoryGameConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _memoryGameApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('memory-game/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('memory-game/tests/helpers/store', ['exports', 'ember', 'ember-data', 'memory-game/tests/helpers/owner'], function (exports, _ember, _emberData, _memoryGameTestsHelpersOwner) {
  exports['default'] = setupStore;
  exports.createStore = createStore;

  function setupStore(options) {
    var container, registry, owner;
    var env = {};
    options = options || {};

    if (_ember['default'].Registry) {
      registry = env.registry = new _ember['default'].Registry();
      owner = _memoryGameTestsHelpersOwner['default'].create({
        __registry__: registry
      });
      container = env.container = registry.container({
        owner: owner
      });
      owner.__container__ = container;
    } else {
      container = env.container = new _ember['default'].Container();
      registry = env.registry = container;
    }

    env.replaceContainerNormalize = function replaceContainerNormalize(fn) {
      if (env.registry) {
        env.registry.normalize = fn;
      } else {
        env.container.normalize = fn;
      }
    };

    var adapter = env.adapter = options.adapter || '-default';
    delete options.adapter;

    if (typeof adapter !== 'string') {
      env.registry.register('adapter:-ember-data-test-custom', adapter);
      adapter = '-ember-data-test-custom';
    }

    for (var prop in options) {
      registry.register('model:' + _ember['default'].String.dasherize(prop), options[prop]);
    }

    registry.register('service:store', _emberData['default'].Store.extend({
      adapter: adapter
    }));

    registry.optionsForType('serializer', { singleton: false });
    registry.optionsForType('adapter', { singleton: false });
    registry.register('adapter:-default', _emberData['default'].Adapter);

    registry.register('serializer:-default', _emberData['default'].JSONSerializer);
    registry.register('serializer:-rest', _emberData['default'].RESTSerializer);

    registry.register('adapter:-rest', _emberData['default'].RESTAdapter);

    registry.register('adapter:-json-api', _emberData['default'].JSONAPIAdapter);
    registry.register('serializer:-json-api', _emberData['default'].JSONAPISerializer);

    env.restSerializer = container.lookup('serializer:-rest');
    env.store = container.lookup('service:store');
    env.serializer = env.store.serializerFor('-default');
    env.adapter = env.store.get('defaultAdapter');

    return env;
  }

  exports.setupStore = setupStore;

  function createStore(options) {
    return setupStore(options).store;
  }
});
define('memory-game/tests/helpers/store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/store.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/store.js should pass jshint.');
  });
});
define('memory-game/tests/integration/components/change-locale-test', ['exports', 'ember-qunit', 'memory-game/locales/en/translations', 'memory-game/locales/es/translations'], function (exports, _emberQunit, _memoryGameLocalesEnTranslations, _memoryGameLocalesEsTranslations) {

  (0, _emberQunit.moduleForComponent)('change-locale', 'Integration | Component | change-locale', {
    integration: true
  });

  (0, _emberQunit.test)('it should be able to change the locale', function (assert) {
    var _localesList, _changeToEnglishButton, _changeToSpanishButton;

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'change-locale', ['loc', [null, [1, 0], [1, 17]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    _localesList = this.$('ul').eq(0);
    _changeToEnglishButton = this.$('li a').eq(0);
    _changeToSpanishButton = this.$('li a').eq(1);

    assert.ok(_localesList, 'it should display the locales button list');
    assert.ok(_changeToEnglishButton, 'it should have a button to switch to English');
    assert.ok(_changeToSpanishButton, 'it should have a button to switch to Spanish');

    assert.ok(_changeToEnglishButton.text().trim(), _memoryGameLocalesEnTranslations['default'].components.changeLocale.english);
    assert.ok(_changeToSpanishButton.text().trim(), _memoryGameLocalesEnTranslations['default'].components.changeLocale.spanish);

    _changeToSpanishButton.click();

    assert.ok(_changeToEnglishButton.text().trim(), _memoryGameLocalesEsTranslations['default'].components.changeLocale.english);
    assert.ok(_changeToSpanishButton.text().trim(), _memoryGameLocalesEsTranslations['default'].components.changeLocale.spanish);

    _changeToEnglishButton.click();
    assert.ok(_changeToEnglishButton.text().trim(), _memoryGameLocalesEnTranslations['default'].components.changeLocale.english);
    assert.ok(_changeToSpanishButton.text().trim(), _memoryGameLocalesEnTranslations['default'].components.changeLocale.spanish);
  });
});
define('memory-game/tests/integration/components/change-locale-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/change-locale-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/change-locale-test.js should pass jshint.');
  });
});
define('memory-game/tests/integration/components/game-board-test', ['exports', 'ember', 'ember-qunit', 'memory-game/constants/game', 'memory-game/tests/helpers/start-app', 'memory-game/tests/helpers/setup-games'], function (exports, _ember, _emberQunit, _memoryGameConstantsGame, _memoryGameTestsHelpersStartApp, _memoryGameTestsHelpersSetupGames) {

  var storeService, cardService, app, appInstance;
  (0, _emberQunit.moduleForComponent)('game-board', 'Integration | Component | game-board', {
    integration: true,

    beforeEach: function beforeEach() {
      app = (0, _memoryGameTestsHelpersStartApp['default'])();
      appInstance = app.buildInstance();
      (0, _memoryGameTestsHelpersSetupGames['default'])(this);

      cardService = this.container.lookup('service:card');
      storeService = this.container.lookup('service:store');

      cardService.getCards().then(function () {
        return storeService.initGames();
      });
    },

    afterEach: function afterEach() {
      _ember['default'].run(app, 'destroy');
    }
  });

  (0, _emberQunit.test)('it should be able display the different game levels', function (assert) {
    var _this = this;

    var done, _gameBoard, _gameCards;

    done = assert.async(3);

    _memoryGameConstantsGame.Game.LEVELS.forEach(function (level) {
      storeService.getGame(level).then(function (game) {
        _this.setProperties({ game: game });
        _this.render(_ember['default'].HTMLBars.template((function () {
          return {
            meta: {
              'revision': 'Ember@2.8.2',
              'loc': {
                'source': null,
                'start': {
                  'line': 1,
                  'column': 0
                },
                'end': {
                  'line': 1,
                  'column': 24
                }
              }
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment('');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [['inline', 'game-board', [], ['game', ['subexpr', '@mut', [['get', 'game', ['loc', [null, [1, 18], [1, 22]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [1, 0], [1, 24]]], 0, 0]],
            locals: [],
            templates: []
          };
        })()));

        _gameBoard = _this.$('.mg-game').eq(0);
        assert.ok(_gameBoard);

        _gameCards = _this.$('.mg-game-card-flip-container');
        assert.ok(_gameCards);
        assert.equal(_gameCards.length, _memoryGameConstantsGame.Game.Level[level].CARDS_NUMBER * 2, 'it should have the level ' + level + ' with ' + _memoryGameConstantsGame.Game.Level[level].CARDS_NUMBER * 2 + ' cards');
        done();
      });
    });
  });

  (0, _emberQunit.test)('it should be able to set a pair if it is a pair', function (assert) {
    var _this2 = this;

    var done, gameCards, turnedCard, _gameCards;

    done = assert.async();

    storeService.getGame(_memoryGameConstantsGame.Game.Level.easy.NAME).then(function (game) {
      gameCards = game.get('gameCards');

      _this2.setProperties({ game: game, turnedCard: turnedCard });

      _this2.render(_ember['default'].HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@2.8.2',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 46
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['inline', 'game-board', [], ['game', ['subexpr', '@mut', [['get', 'game', ['loc', [null, [1, 18], [1, 22]]], 0, 0, 0, 0]], [], [], 0, 0], 'turnedCard', ['subexpr', '@mut', [['get', 'turnedCard', ['loc', [null, [1, 34], [1, 44]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [1, 0], [1, 46]]], 0, 0]],
          locals: [],
          templates: []
        };
      })()));

      _gameCards = _this2.$('.mg-game-card-flipper');

      assert.notOk(_this2.get('turnedCard'), 'it should not have turned card');

      _gameCards.eq(0).click();
      assert.ok(_this2.get('turnedCard'), 'it should have saved the turned card');
      assert.ok(_this2.get('game.gameCards').objectAt(0).get('isTurned'));

      _gameCards.eq(1).click();
      assert.ok(_this2.get('game.gameCards').objectAt(1).get('isTurned'));

      _ember['default'].run.later(_this2, function () {
        assert.ok(_this2.get('game.gameCards').objectAt(0).get('isTurned'));
        assert.ok(_this2.get('game.gameCards').objectAt(1).get('isTurned'));
        assert.ok(_this2.get('game.gameCards').objectAt(0).get('isPaired'));
        assert.ok(_this2.get('game.gameCards').objectAt(1).get('isPaired'));
        done();
      }, _memoryGameConstantsGame.Game.TURN_ANIMATION_DELAY_MILISECONDS);
    });
  });

  (0, _emberQunit.test)('it should be able to reject a pair if it is not a pair', function (assert) {
    var _this3 = this;

    var done, gameCards, turnedCard, _gameCards;

    done = assert.async();

    storeService.getGame(_memoryGameConstantsGame.Game.Level.easy.NAME).then(function (game) {
      gameCards = game.get('gameCards');

      _this3.setProperties({ game: game, turnedCard: turnedCard });

      _this3.render(_ember['default'].HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@2.8.2',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 46
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['inline', 'game-board', [], ['game', ['subexpr', '@mut', [['get', 'game', ['loc', [null, [1, 18], [1, 22]]], 0, 0, 0, 0]], [], [], 0, 0], 'turnedCard', ['subexpr', '@mut', [['get', 'turnedCard', ['loc', [null, [1, 34], [1, 44]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [1, 0], [1, 46]]], 0, 0]],
          locals: [],
          templates: []
        };
      })()));

      _gameCards = _this3.$('.mg-game-card-flipper');

      assert.notOk(_this3.get('turnedCard'), 'it should not have turned card');

      _gameCards.eq(0).click();
      assert.ok(_this3.get('turnedCard'), 'it should have saved the turned card');
      assert.ok(_this3.get('game.gameCards').objectAt(0).get('isTurned'));

      _gameCards.eq(2).click();
      assert.ok(_this3.get('game.gameCards').objectAt(2).get('isTurned'));

      _ember['default'].run.later(_this3, function () {
        assert.notOk(_this3.get('game.gameCards').objectAt(0).get('isTurned'));
        assert.notOk(_this3.get('game.gameCards').objectAt(2).get('isTurned'));
        done();
      }, _memoryGameConstantsGame.Game.TURN_ANIMATION_DELAY_MILISECONDS);
    });
  });

  (0, _emberQunit.test)('it should be able finish a game', function (assert) {
    var _this4 = this;

    var done, gameCards, turnedCard, _gameCards, cardHasBeenTurned;

    done = assert.async();
    storeService.getGame(_memoryGameConstantsGame.Game.Level.easy.NAME).then(function (game) {
      gameCards = game.get('gameCards');

      _this4.setProperties({ game: game, turnedCard: turnedCard, cardHasBeenTurned: cardHasBeenTurned });

      _this4.render(_ember['default'].HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@2.8.2',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 46
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['inline', 'game-board', [], ['game', ['subexpr', '@mut', [['get', 'game', ['loc', [null, [1, 18], [1, 22]]], 0, 0, 0, 0]], [], [], 0, 0], 'turnedCard', ['subexpr', '@mut', [['get', 'turnedCard', ['loc', [null, [1, 34], [1, 44]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [1, 0], [1, 46]]], 0, 0]],
          locals: [],
          templates: []
        };
      })()));

      _gameCards = _this4.$('.mg-game-card-flipper');

      assert.notOk(_this4.get('turnedCard'), 'it should not have turned card');

      _gameCards.eq(0).click();
      assert.ok(_this4.get('turnedCard'), 'it should have saved the turned card');
      assert.ok(_this4.get('game.gameCards').objectAt(0).get('isTurned'));

      _gameCards.eq(1).click();
      assert.ok(_this4.get('game.gameCards').objectAt(1).get('isTurned'));
      assert.ok(_this4.get('game.gameCards').objectAt(0).get('isPaired'));
      assert.ok(_this4.get('game.gameCards').objectAt(1).get('isPaired'));

      _gameCards.eq(2).click();
      _gameCards.eq(3).click();
      assert.ok(_this4.get('game.gameCards').objectAt(2).get('isPaired'));
      assert.ok(_this4.get('game.gameCards').objectAt(3).get('isPaired'));
      assert.ok(_this4.get('game.isFinished'), 'it should be finished if all the cards are paired');
      done();
    });
  });
});
define('memory-game/tests/integration/components/game-board-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/game-board-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/game-board-test.js should pass jshint.');
  });
});
define('memory-game/tests/integration/components/game-card-test', ['exports', 'ember', 'ember-qunit', 'memory-game/tests/helpers/start-app', 'memory-game/tests/helpers/setup-games', 'memory-game/constants/store', 'memory-game/constants/game', 'memory-game/constants/cards', 'memory-game/locales/en/translations', 'memory-game/locales/es/translations'], function (exports, _ember, _emberQunit, _memoryGameTestsHelpersStartApp, _memoryGameTestsHelpersSetupGames, _memoryGameConstantsStore, _memoryGameConstantsGame, _memoryGameConstantsCards, _memoryGameLocalesEnTranslations, _memoryGameLocalesEsTranslations) {

  var storeService, app, appInstance;
  (0, _emberQunit.moduleForComponent)('game-card', 'Integration | Component | game-card', {
    integration: true,

    beforeEach: function beforeEach() {
      app = (0, _memoryGameTestsHelpersStartApp['default'])();
      appInstance = app.buildInstance();
      (0, _memoryGameTestsHelpersSetupGames['default'])(this);

      storeService = this.container.lookup('service:store');
      storeService.initGames();
    },

    afterEach: function afterEach() {
      _ember['default'].run(app, 'destroy');
    }
  });

  (0, _emberQunit.test)('it should be able display a game card', function (assert) {
    var _this = this;

    var done, name, game, card, _gameCard, _gameCardBackText, _gameCardFrontText, _gameCardBackImage, _gameCardFrontImage, _changeToSpanishButton;

    done = assert.async();
    name = 'alpaca';

    _ember['default'].run(function () {
      game = _memoryGameConstantsGame.Game.LEVELS[0];

      card = _ember['default'].Object.extend({}).create({
        name: name,
        meta: {}
      });

      storeService.setGameCard(game, card);
      card = storeService.peekAll(_memoryGameConstantsStore.Model.GAME_CARD).objectAt(0);

      _this.setProperties({ card: card });
      _this.render(_ember['default'].HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@2.8.2',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 40
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['inline', 'game-card', [], ['card', ['subexpr', '@mut', [['get', 'card', ['loc', [null, [1, 17], [1, 21]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [1, 0], [1, 23]]], 0, 0], ['content', 'change-locale', ['loc', [null, [1, 23], [1, 40]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })()));

      _gameCard = _this.$('.mg-game-card-flipper').eq(0);
      _gameCardBackText = _this.$('.mg-game-card-text').eq(0);
      _gameCardFrontText = _this.$('.mg-game-card-text').eq(1);
      _gameCardBackImage = _this.$('.mg-game-card-image img').eq(0);
      _gameCardFrontImage = _this.$('.mg-game-card-image img').eq(1);
      _changeToSpanishButton = _this.$('li a').eq(1);

      assert.ok(_gameCard);
      assert.equal(_gameCardBackText.text().trim(), _memoryGameLocalesEnTranslations['default'].components.gameCard.template.cards[name]);
      assert.equal(_gameCardFrontText.text().trim(), _memoryGameLocalesEnTranslations['default'].application.title);

      assert.equal(_gameCardBackImage.prop('src'), window.location.origin + '/assets/images/' + name + '.png');
      assert.equal(_gameCardFrontImage.prop('src'), window.location.origin + '/assets/images/' + _memoryGameConstantsCards.Card.BACK_IMAGE_NAME + '.png');

      _changeToSpanishButton.click();
      _gameCardBackText = _this.$('.mg-game-card-text').eq(0);
      _gameCardFrontText = _this.$('.mg-game-card-text').eq(1);
      assert.equal(_gameCardBackText.text().trim(), _memoryGameLocalesEsTranslations['default'].components.gameCard.template.cards[name]);
      assert.equal(_gameCardFrontText.text().trim(), _memoryGameLocalesEsTranslations['default'].application.title);

      _gameCard.click();
      assert.ok(_this.get('card.isTurned'));
      done();
    });
  });
});
define('memory-game/tests/integration/components/game-card-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/game-card-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/game-card-test.js should pass jshint.');
  });
});
define('memory-game/tests/integration/components/level-name-test', ['exports', 'ember-qunit', 'memory-game/constants/game', 'memory-game/locales/en/translations', 'memory-game/locales/es/translations'], function (exports, _emberQunit, _memoryGameConstantsGame, _memoryGameLocalesEnTranslations, _memoryGameLocalesEsTranslations) {

  (0, _emberQunit.moduleForComponent)('change-locale', 'Integration | Component | change-locale', {
    integration: true
  });

  (0, _emberQunit.test)('it should be able to display the level name', function (assert) {
    var name, _levelName, _changeToEnglishButton, _changeToSpanishButton;

    name = _memoryGameConstantsGame.Game.LEVELS[0];

    this.setProperties({ name: name });
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 41
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'change-locale', ['loc', [null, [1, 0], [1, 17]]], 0, 0, 0, 0], ['inline', 'level-name', [], ['name', ['subexpr', '@mut', [['get', 'name', ['loc', [null, [1, 35], [1, 39]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [1, 17], [1, 41]]], 0, 0]],
        locals: [],
        templates: []
      };
    })()));

    _levelName = this.$('span').eq(0);
    _changeToEnglishButton = this.$('li a').eq(0);
    _changeToSpanishButton = this.$('li a').eq(1);

    assert.equal(_levelName.text().trim(), _memoryGameLocalesEnTranslations['default'].components.levelName.template[name]);
    _changeToSpanishButton.click();
    assert.equal(_levelName.text().trim(), _memoryGameLocalesEsTranslations['default'].components.levelName.template[name]);
  });
});
define('memory-game/tests/integration/components/level-name-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/level-name-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/level-name-test.js should pass jshint.');
  });
});
define('memory-game/tests/locales/en/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | locales/en/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass jshint.');
  });
});
define('memory-game/tests/locales/es/translations.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | locales/es/translations.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/es/translations.js should pass jshint.');
  });
});
define('memory-game/tests/models/card.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/card.js should pass jshint.');
  });
});
define('memory-game/tests/models/game-card.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/game-card.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/game-card.js should pass jshint.');
  });
});
define('memory-game/tests/models/game.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/game.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/game.js should pass jshint.');
  });
});
define('memory-game/tests/pods/application/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/application/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass jshint.');
  });
});
define('memory-game/tests/pods/components/change-locale/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/change-locale/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/change-locale/component.js should pass jshint.');
  });
});
define('memory-game/tests/pods/components/game-board/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/game-board/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/game-board/component.js should pass jshint.');
  });
});
define('memory-game/tests/pods/components/game-card/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/game-card/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/game-card/component.js should pass jshint.');
  });
});
define('memory-game/tests/pods/components/level-name/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/level-name/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/level-name/component.js should pass jshint.');
  });
});
define('memory-game/tests/pods/components/nav-sidebar/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/components/nav-sidebar/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/nav-sidebar/component.js should pass jshint.');
  });
});
define('memory-game/tests/pods/game/level/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/game/level/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/game/level/route.js should pass jshint.');
  });
});
define('memory-game/tests/pods/game/start/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | pods/game/start/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/game/start/route.js should pass jshint.');
  });
});
define('memory-game/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('memory-game/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('memory-game/tests/test-helper', ['exports', 'memory-game/tests/helpers/resolver', 'ember-qunit'], function (exports, _memoryGameTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_memoryGameTestsHelpersResolver['default']);
});
define('memory-game/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('memory-game/tests/transforms/object.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transforms/object.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/object.js should pass jshint.');
  });
});
define('memory-game/tests/unit/components/change-locale-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('change-locale', 'Unit | Component | change-locale', {
    needs: ['service:i18n'],
    unit: true
  });

  (0, _emberQunit.test)('it should render', function (assert) {
    var _component = this.subject();
    assert.ok(_component);
  });
});
define('memory-game/tests/unit/components/change-locale-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/change-locale-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/change-locale-test.js should pass jshint.');
  });
});
define('memory-game/tests/unit/components/game-board-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('game-board', 'Unit | Component | game-board', {
    needs: ['component:game-card'],
    unit: true
  });

  (0, _emberQunit.test)('it should render', function (assert) {
    var _component = this.subject();
    assert.ok(_component);
  });
});
define('memory-game/tests/unit/components/game-board-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/game-board-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/game-board-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/components/game-card-test", ["exports"], function (exports) {});
define('memory-game/tests/unit/components/game-card-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/game-card-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/game-card-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/components/level-name-test", ["exports"], function (exports) {});
define('memory-game/tests/unit/components/level-name-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/level-name-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/level-name-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/components/nav-sidebar-test", ["exports"], function (exports) {});
define('memory-game/tests/unit/components/nav-sidebar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/nav-sidebar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/nav-sidebar-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/components/nav-sidebar-toggle-test", ["exports"], function (exports) {});
define('memory-game/tests/unit/components/nav-sidebar-toggle-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/components/nav-sidebar-toggle-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/components/nav-sidebar-toggle-test.js should pass jshint.');
  });
});
define('memory-game/tests/unit/models/card-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  (0, _emberQunit.moduleForModel)('card', 'Unit | Model | card', {
    needs: []
  });

  (0, _emberQunit.test)('it should have a card model', function (assert) {
    var model = undefined,
        name = undefined,
        meta = undefined;

    model = this.subject();
    name = 'card-name';
    meta = {};

    _ember['default'].run(function () {
      model.setProperties({ name: name, meta: meta });
    });

    assert.equal(model.get('name'), name, 'it should have a correct name attribute');
    assert.equal(model.get('meta'), meta, 'it should have a correct meta attribute');
  });
});
define('memory-game/tests/unit/models/card-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/card-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/card-test.js should pass jshint.');
  });
});
define('memory-game/tests/unit/models/game-card-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  (0, _emberQunit.moduleForModel)('game-card', 'Unit | Model | game', {
    needs: ['model:game']
  });

  (0, _emberQunit.test)('it should have a game model', function (assert) {
    var model = undefined,
        name = undefined;

    model = this.subject();
    name = 'card-name';

    _ember['default'].run(function () {
      model.setProperties({ name: name });
    });

    assert.equal(model.get('name'), name, 'it should have a correct name attribute');
  });
});
define('memory-game/tests/unit/models/game-card-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/game-card-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/game-card-test.js should pass jshint.');
  });
});
define('memory-game/tests/unit/models/game-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {

  (0, _emberQunit.moduleForModel)('game', 'Unit | Model | game', {
    needs: ['model:game-card']
  });

  (0, _emberQunit.test)('it should have a game model', function (assert) {
    var model = undefined,
        level = undefined;

    model = this.subject();
    level = 'game';

    _ember['default'].run(function () {
      model.setProperties({ level: level });
    });

    assert.equal(model.get('level'), level, 'it should have a correct level attribute');
  });
});
define('memory-game/tests/unit/models/game-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/game-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/game-test.js should pass jshint.');
  });
});
define('memory-game/tests/unit/routes/application-test', ['exports', 'ember', 'ember-qunit', 'memory-game/tests/helpers/start-app'], function (exports, _ember, _emberQunit, _memoryGameTestsHelpersStartApp) {

  var App, AppInstance, ApplicationRoute;

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    needs: ['service:route', 'service:store', 'service:api', 'service:i18n'],

    beforeEach: function beforeEach() {
      App = (0, _memoryGameTestsHelpersStartApp['default'])();
      AppInstance = App.buildInstance();
      ApplicationRoute = this.subject();
    },
    afterEach: function afterEach() {
      _ember['default'].run(App, 'destroy');
    }
  });

  (0, _emberQunit.test)('it should have an application route', function (assert) {
    assert.ok(ApplicationRoute, 'it should have an application route');
  });
});
define('memory-game/tests/unit/routes/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('memory-game/tests/unit/routes/game-level-test', ['exports', 'ember', 'ember-qunit', 'memory-game/tests/helpers/start-app'], function (exports, _ember, _emberQunit, _memoryGameTestsHelpersStartApp) {

  var App, AppInstance, GameLevelRoute;

  (0, _emberQunit.moduleFor)('route:game.level', 'Unit | Route | game.level', {
    needs: ['service:route', 'service:store', 'service:api', 'service:i18n'],

    beforeEach: function beforeEach() {
      App = (0, _memoryGameTestsHelpersStartApp['default'])();
      AppInstance = App.buildInstance();
      GameLevelRoute = this.subject();
    },
    afterEach: function afterEach() {
      _ember['default'].run(App, 'destroy');
    }
  });

  (0, _emberQunit.test)('it should have a game level route', function (assert) {
    assert.ok(GameLevelRoute, 'it should have a game level route');
  });
});
define('memory-game/tests/unit/routes/game-level-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/game-level-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/game-level-test.js should pass jshint.');
  });
});
define('memory-game/tests/unit/routes/game-start-test', ['exports', 'ember', 'ember-qunit', 'memory-game/tests/helpers/start-app'], function (exports, _ember, _emberQunit, _memoryGameTestsHelpersStartApp) {

  var App, AppInstance, GameStartRoute;

  (0, _emberQunit.moduleFor)('route:game.start', 'Unit | Route | game.start', {
    needs: ['service:route', 'service:store', 'service:api', 'service:i18n'],

    beforeEach: function beforeEach() {
      App = (0, _memoryGameTestsHelpersStartApp['default'])();
      AppInstance = App.buildInstance();
      GameStartRoute = this.subject();
    },
    afterEach: function afterEach() {
      _ember['default'].run(App, 'destroy');
    }
  });

  (0, _emberQunit.test)('it should have a game start route', function (assert) {
    assert.ok(GameStartRoute, 'it should have a game start route');
  });
});
define('memory-game/tests/unit/routes/game-start-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/game-start-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/game-start-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/services/api-test", ["exports"], function (exports) {});
define('memory-game/tests/unit/services/api-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/api-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/api-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/services/card-test", ["exports"], function (exports) {});
define('memory-game/tests/unit/services/card-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/card-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/card-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/services/route-test", ["exports"], function (exports) {});
define('memory-game/tests/unit/services/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/route-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/services/store-test", ["exports"], function (exports) {});
define('memory-game/tests/unit/services/store-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/store-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/store-test.js should pass jshint.');
  });
});
define("memory-game/tests/unit/utils/utils", ["exports"], function (exports) {});
define('memory-game/tests/unit/utils/utils.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/utils/utils.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/utils.js should pass jshint.');
  });
});
define('memory-game/tests/utils/array-utils.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | utils/array-utils.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/array-utils.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('memory-game/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map

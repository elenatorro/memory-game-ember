"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('memory-game/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  var JSONAPIAdapter = _emberData['default'].JSONAPIAdapter;
  exports['default'] = JSONAPIAdapter.extend({
    namespace: 'api'
  });
});
define('memory-game/app', ['exports', 'ember', 'memory-game/resolver', 'ember-load-initializers', 'memory-game/config/environment'], function (exports, _ember, _memoryGameResolver, _emberLoadInitializers, _memoryGameConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _memoryGameConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _memoryGameConfigEnvironment['default'].podModulePrefix,
    Resolver: _memoryGameResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _memoryGameConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('memory-game/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'memory-game/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _memoryGameConfigEnvironment) {

  var name = _memoryGameConfigEnvironment['default'].APP.name;
  var version = _memoryGameConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('memory-game/constants/api', ['exports', 'memory-game/config/environment'], function (exports, _memoryGameConfigEnvironment) {
  var RequestURLS = Object.freeze({
    Cards: {
      GetCards: Object.freeze({
        METHOD: 'GET',
        URL: _memoryGameConfigEnvironment['default'].apiURL + '/cards',
        HEADERS: Object.freeze({
          'Content-Type': 'application/json'
        })
      })
    }
  });

  exports.RequestURLS = RequestURLS;
  var ResponseStatus = Object.freeze({
    200: 'success',
    404: 'notFound',
    412: 'noGame'
  });
  exports.ResponseStatus = ResponseStatus;
});
define('memory-game/constants/cards', ['exports'], function (exports) {
  var Card = Object.freeze({
    BACK_IMAGE_NAME: 'brainstorming'
  });
  exports.Card = Card;
});
define('memory-game/constants/game-cards', ['exports'], function (exports) {
  var GameCards = Object.freeze({
    cards: [{
      name: 'alpaca',
      meta: {}
    }, {
      name: 'anteater',
      meta: {}
    }, {
      name: 'bat',
      meta: {}
    }, {
      name: 'beetle',
      meta: {}
    }, {
      name: 'butterfly',
      meta: {}
    }, {
      name: 'camel',
      meta: {}
    }, {
      name: 'cat',
      meta: {}
    }, {
      name: 'chameleon',
      meta: {}
    }, {
      name: 'cobra',
      meta: {}
    }, {
      name: 'cow',
      meta: {}
    }, {
      name: 'crab',
      meta: {}
    }, {
      name: 'crocodile',
      meta: {}
    }, {
      name: 'dog',
      meta: {}
    }, {
      name: 'duck',
      meta: {}
    }, {
      name: 'elephant',
      meta: {}
    }, {
      name: 'elk',
      meta: {}
    }, {
      name: 'fish',
      meta: {}
    }, {
      name: 'frog',
      meta: {}
    }, {
      name: 'giraffe',
      meta: {}
    }, {
      name: 'hen',
      meta: {}
    }, {
      name: 'hippopotamus',
      meta: {}
    }, {
      name: 'kangaroo',
      meta: {}
    }, {
      name: 'macaw',
      meta: {}
    }, {
      name: 'monkey',
      meta: {}
    }, {
      name: 'mouse',
      meta: {}
    }, {
      name: 'octopus',
      meta: {}
    }, {
      name: 'ostrich',
      meta: {}
    }, {
      name: 'owl',
      meta: {}
    }, {
      name: 'panda',
      meta: {}
    }, {
      name: 'pelican',
      meta: {}
    }, {
      name: 'penguin',
      meta: {}
    }, {
      name: 'pig',
      meta: {}
    }, {
      name: 'rabbit',
      meta: {}
    }, {
      name: 'raccoon',
      meta: {}
    }, {
      name: 'rhinoceros',
      meta: {}
    }, {
      name: 'seaCow',
      meta: {}
    }, {
      name: 'shark',
      meta: {}
    }, {
      name: 'sheep',
      meta: {}
    }, {
      name: 'sloth',
      meta: {}
    }, {
      name: 'snake',
      meta: {}
    }, {
      name: 'spider',
      meta: {}
    }, {
      name: 'squirrel',
      meta: {}
    }, {
      name: 'stingray',
      meta: {}
    }, {
      name: 'swan',
      meta: {}
    }, {
      name: 'tiger',
      meta: {}
    }, {
      name: 'tortoise',
      meta: {}
    }, {
      name: 'toucan',
      meta: {}
    }, {
      name: 'whale',
      meta: {}
    }]
  });
  exports.GameCards = GameCards;
});
define('memory-game/constants/game', ['exports'], function (exports) {
  var Game = Object.freeze({
    Level: Object.freeze({
      easy: Object.freeze({
        NAME: 'easy',
        CARDS_NUMBER: 2
      }),
      medium: Object.freeze({
        NAME: 'medium',
        CARDS_NUMBER: 4
      }),
      difficult: Object.freeze({
        NAME: 'difficult',
        CARDS_NUMBER: 16
      })
    }),
    LEVELS: ['easy', 'medium', 'difficult'],
    TURN_ANIMATION_DELAY_MILISECONDS: 1000
  });
  exports.Game = Game;
});
define('memory-game/constants/locales', ['exports'], function (exports) {
  var Locales = Object.freeze({
    EN: 'en',
    ES: 'es'
  });
  exports.Locales = Locales;
});
define('memory-game/constants/store', ['exports'], function (exports) {
  var Model = Object.freeze({
    CARD: 'card',
    GAME: 'game',
    GAME_CARD: 'gameCard'
  });
  exports.Model = Model;
});
define('memory-game/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('memory-game/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('memory-game/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('memory-game/index', ['exports', 'ember-uuid'], function (exports, _emberUuid) {
  Object.defineProperty(exports, 'v4', {
    enumerable: true,
    get: function get() {
      return _emberUuid.v4;
    }
  });
  Object.defineProperty(exports, 'v1', {
    enumerable: true,
    get: function get() {
      return _emberUuid.v1;
    }
  });
  Object.defineProperty(exports, 'parse', {
    enumerable: true,
    get: function get() {
      return _emberUuid.parse;
    }
  });
  Object.defineProperty(exports, 'unparse', {
    enumerable: true,
    get: function get() {
      return _emberUuid.unparse;
    }
  });
});
define('memory-game/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'memory-game/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _memoryGameConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_memoryGameConfigEnvironment['default'].APP.name, _memoryGameConfigEnvironment['default'].APP.version)
  };
});
define('memory-game/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('memory-game/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('memory-game/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('memory-game/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18nInitializersEmberI18n) {
  exports['default'] = _emberI18nInitializersEmberI18n['default'];
});
define('memory-game/initializers/export-application-global', ['exports', 'ember', 'memory-game/config/environment'], function (exports, _ember, _memoryGameConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_memoryGameConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _memoryGameConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_memoryGameConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('memory-game/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('memory-game/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('memory-game/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("memory-game/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('memory-game/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18nInstanceInitializersEmberI18n) {
  exports['default'] = _emberI18nInstanceInitializersEmberI18n['default'];
});
define('memory-game/locales/en/translations', ['exports'], function (exports) {
  exports['default'] = {
    application: {
      title: 'Memory Game'
    },
    index: {
      template: {
        startGame: 'Start Game'
      }
    },
    game: {
      start: {
        template: {
          level: 'Level',
          selectLevel: 'Select Level'
        }
      },
      level: {
        template: {
          level: 'Level',
          playAgain: 'Play again',
          goBack: 'Go back',
          finishAndGoBack: 'Finish and go back',
          wellDoneYouWon: 'Well done! You won!',
          clickOnTheCards: 'Click on the cards to flip them'
        }
      }
    },

    components: {
      navSidebar: {
        template: {
          menu: 'Menu'
        }
      },
      changeLocale: {
        template: {
          EN: 'Inglés',
          ES: 'Spanish'
        }
      },
      gameCard: {
        template: {
          cards: {
            alpaca: "alpaca",
            anteater: "anteater",
            bat: "bat",
            beetle: "beetle",
            butterfly: "butterfly",
            camel: "camel",
            cat: "cat",
            chameleon: "chameleon",
            cobra: "cobra",
            cow: "cow",
            crab: "crab",
            crocodile: "crocodile",
            dog: "dog",
            duck: "duck",
            elephant: "elephant",
            elk: "elk",
            fish: "fish",
            frog: "frog",
            giraffe: "giraffe",
            hen: "hen",
            hippopotamus: "hippopotamus",
            kangaroo: "kangaroo",
            macaw: "macaw",
            monkey: "monkey",
            mouse: "mouse",
            octopus: "octopus",
            ostrich: "ostrich",
            owl: "owl",
            panda: "panda",
            pelican: "pelican",
            penguin: "penguin",
            pig: "pig",
            rabbit: "rabbit",
            raccoon: "raccoon",
            rhinoceros: "rhinoceros",
            seaCow: "sea-cow",
            shark: "shark",
            sheep: "sheep",
            sloth: "sloth",
            snake: "snake",
            spider: "spider",
            squirrel: "squirrel",
            stingray: "stingray",
            swan: "swan",
            tiger: "tiger",
            tortoise: "tortoise",
            toucan: "toucan",
            whale: "whale"
          }
        }
      },
      levelName: {
        template: {
          easy: 'Easy',
          medium: 'Medium',
          difficult: 'Difficult'
        }
      }
    }
  };
});
define('memory-game/locales/es/translations', ['exports'], function (exports) {
  exports['default'] = {
    application: {
      title: 'Juego de Memoria'
    },
    index: {
      template: {
        startGame: 'Empezar'
      }
    },
    game: {
      start: {
        template: {
          level: 'Nivel',
          selectLevel: 'Selecciona Nivel'
        }
      },
      level: {
        template: {
          level: 'Nivel',
          playAgain: 'Jugar otra vez',
          goBack: 'Volver atrás',
          finishAndGoBack: 'Terminar y volver atrás',
          wellDoneYouWon: '!Muy bien! ¡Has ganado!',
          clickOnTheCards: 'Haz click en las cartas para girarlas'
        }
      }
    },
    components: {
      navSidebar: {
        template: {
          menu: 'Menú'
        }
      },
      changeLocale: {
        template: {
          EN: 'English',
          ES: 'Español'
        }
      },
      gameCard: {
        template: {
          cards: {
            alpaca: "alpaca",
            anteater: "oso hormiguero",
            bat: "murciélago",
            beetle: "escarabajo",
            butterfly: "mariposa",
            camel: "camello",
            cat: "gato",
            chameleon: "camaleón",
            cobra: "cobra",
            cow: "vaca",
            crab: "cangrejo",
            crocodile: "cocodrilo",
            dog: "perro",
            duck: "pato",
            elephant: "elefante",
            elk: "alce",
            fish: "pez",
            frog: "rana",
            giraffe: "jirafa",
            hen: "gallina",
            hippopotamus: "hipopótamo",
            kangaroo: "canguro",
            macaw: "guacamayo",
            monkey: "mono",
            mouse: "ratón",
            octopus: "pulpo",
            ostrich: "avestruz",
            owl: "búho",
            panda: "panda",
            pelican: "pelícano",
            penguin: "pingüino",
            pig: "cerdo",
            rabbit: "conejo",
            raccoon: "mapache",
            rhinoceros: "rinoceronte",
            seaCow: "manatí",
            shark: "tiburón",
            sheep: "oveja",
            sloth: "perezoso",
            snake: "serpiente",
            spider: "araña",
            squirrel: "ardilla",
            stingray: "mantarraya",
            swan: "cisne",
            tiger: "tigre",
            tortoise: "tortuga",
            toucan: "tucán",
            whale: "ballena"
          }
        }
      },
      levelName: {
        template: {
          easy: 'Fácil',
          medium: 'Medio',
          difficult: 'Difícil'
        }
      }
    }
  };
});
define('memory-game/models/card', ['exports', 'ember-data'], function (exports, _emberData) {
  var attr = _emberData['default'].attr;
  var Model = _emberData['default'].Model;
  exports['default'] = Model.extend({
    name: attr('string'),
    meta: attr('object')
  });
});
define('memory-game/models/game-card', ['exports', 'ember-data', 'memory-game/models/card'], function (exports, _emberData, _memoryGameModelsCard) {
  var attr = _emberData['default'].attr;
  var belongsTo = _emberData['default'].belongsTo;
  exports['default'] = _memoryGameModelsCard['default'].extend({
    game: belongsTo('game'),
    isTurned: attr('boolean'),
    isPaired: attr('boolean')
  });
});
define('memory-game/models/game', ['exports', 'ember', 'ember-data', 'memory-game/constants/game', 'memory-game/utils/array-utils'], function (exports, _ember, _emberData, _memoryGameConstantsGame, _memoryGameUtilsArrayUtils) {
  var attr = _emberData['default'].attr;
  var hasMany = _emberData['default'].hasMany;
  var Model = _emberData['default'].Model;
  var computed = _ember['default'].computed;
  exports['default'] = Model.extend({
    level: attr('string'),
    isLocked: attr('boolean'),
    gameCards: hasMany('game-card'),

    isFinished: computed('gameCards.@each.isPaired', {
      get: function get() {
        return this.get('gameCards').isEvery('isPaired', true);
      }
    }),

    spawnCards: function spawnCards() {
      var _this = this;

      var cardsNumber = _memoryGameConstantsGame.Game.Level[this.get('level')].CARDS_NUMBER;

      var cards = _memoryGameUtilsArrayUtils.ArrayUtils.sample(this.store.peekAll('card'), cardsNumber);

      var gameCards = _memoryGameUtilsArrayUtils.ArrayUtils.shuffle(cards.concat(cards)).map(function (card) {
        return _this.store.createRecord('gameCard', {
          game: _this,
          name: card.get('name'),
          meta: card.get('meta')
        });
      });
      this.set('gameCards', gameCards);
    }

  });
});
define('memory-game/pods/application/route', ['exports', 'ember'], function (exports, _ember) {
  var Route = _ember['default'].Route;
  exports['default'] = Route.extend({
    beforeModel: function beforeModel() {
      return this.store.findAll('card');
    },

    actions: {
      goToIndex: function goToIndex() {
        this.transitionTo('index');
      }
    }
  });
});
define("memory-game/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "memory-game");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "nav-sidebar", [], ["on-go-to-index", "goToIndex"], ["loc", [null, [3, 2], [3, 44]]], 0, 0], ["content", "outlet", ["loc", [null, [6, 4], [6, 14]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('memory-game/pods/components/change-locale/component', ['exports', 'ember', 'memory-game/constants/locales'], function (exports, _ember, _memoryGameConstantsLocales) {
  exports['default'] = _ember['default'].Component.extend({
    i18nService: _ember['default'].inject.service('i18n'),
    tagName: 'ul',

    actions: {
      changeTo: function changeTo(locale) {
        if (!!_memoryGameConstantsLocales.Locales[locale]) {
          this.set('i18nService.locale', locale);
        }
      }
    }
  });
});
define("memory-game/pods/components/change-locale/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/components/change-locale/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        dom.setAttribute(el2, "class", "btn btn-small waves-effect waves-light purple darken-2 mg-level-button");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "#");
        dom.setAttribute(el2, "class", "btn btn-small waves-effect waves-light purple darken-2 mg-level-button");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(element0, 0, 0);
        morphs[2] = dom.createElementMorph(element1);
        morphs[3] = dom.createMorphAt(element1, 0, 0);
        return morphs;
      },
      statements: [["element", "action", ["changeTo", "EN"], [], ["loc", [null, [2, 93], [2, 119]]], 0, 0], ["inline", "t", ["components.changeLocale.template.EN"], [], ["loc", [null, [2, 120], [2, 163]]], 0, 0], ["element", "action", ["changeTo", "ES"], [], ["loc", [null, [5, 93], [5, 119]]], 0, 0], ["inline", "t", ["components.changeLocale.template.ES"], [], ["loc", [null, [5, 120], [5, 163]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('memory-game/pods/components/game-board/component', ['exports', 'ember', 'memory-game/constants/game'], function (exports, _ember, _memoryGameConstantsGame) {
  var Component = _ember['default'].Component;
  var later = _ember['default'].run.later;
  exports['default'] = Component.extend({
    classNames: ['mg-game'],
    tagName: 'div',

    // Model
    game: null,
    turnedCard: null,

    actions: {
      cardHasBeenTurned: function cardHasBeenTurned(card) {
        var turnedCard;

        turnedCard = this.get('turnedCard');
        if (!!turnedCard) {
          this.set('game.isLocked', true);
          _checkPairAndResetGame.call(this, card, turnedCard);
        } else {
          this.set('turnedCard', card);
        }
      }
    }
  });

  /* Private */
  function _checkPairAndResetGame(card1, card2) {
    _setPairedCardsIfIsPair.call(this, card1, card2);
    _resetGame.call(this, card1, card2);
  }

  function _setPairedCardsIfIsPair(card1, card2) {
    return _isPair.call(this, card1, card2) ? _pairCards.call(this, card1, card2) : _turnCards.call(this, card1, card2);
  }

  function _isPair(card1, card2) {
    return card1.get('name') === card2.get('name');
  }

  function _resetGame() {
    this.set('turnedCard', null);
    this.set('game.isLocked', false);
  }

  function _pairCards(card1, card2) {
    card1.toggleProperty('isPaired');
    card2.toggleProperty('isPaired');
  }

  function _turnCards(card1, card2) {
    later(this, function () {
      card1.set('isTurned', false);
      card2.set('isTurned', false);
    }, _memoryGameConstantsGame.Game.TURN_ANIMATION_DELAY_MILISECONDS);
  }
});
define("memory-game/pods/components/game-board/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "memory-game/pods/components/game-board/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "game-card", [], ["card", ["subexpr", "@mut", [["get", "card", ["loc", [null, [2, 19], [2, 23]]], 0, 0, 0, 0]], [], [], 0, 0], "on-card-is-turned", "cardHasBeenTurned", "isGameLocked", ["subexpr", "@mut", [["get", "game.isLocked", ["loc", [null, [2, 75], [2, 88]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 2], [2, 90]]], 0, 0]],
        locals: ["card"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/components/game-board/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
      statements: [["block", "each", [["get", "game.gameCards", ["loc", [null, [1, 8], [1, 22]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('memory-game/pods/components/game-card/component', ['exports', 'ember', 'memory-game/constants/cards', 'memory-game/constants/game', 'memory-game/config/environment'], function (exports, _ember, _memoryGameConstantsCards, _memoryGameConstantsGame, _memoryGameConfigEnvironment) {
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  var equal = _ember['default'].computed.equal;
  exports['default'] = Component.extend({
    classNameBindings: ['isEasy:mg-game-card-flip-container-easy', 'isMedium:mg-game-card-flip-container-medium', 'isDifficult:mg-game-card-flip-container-difficult'],
    classNames: ['mg-game-card-flip-container'],
    tagName: 'div',

    // Model
    card: null,
    isGameLocked: null,

    isSelectable: computed('card.isPaired', 'card.isTurned', 'isGameLocked', function () {
      return !(this.get('card.isTurned') || this.get('card.isPaired') || this.get('isGameLocked'));
    }),

    isEasy: equal('card.game.level', _memoryGameConstantsGame.Game.Level.easy.NAME),
    isMedium: equal('card.game.level', _memoryGameConstantsGame.Game.Level.medium.NAME),
    isDifficult: equal('card.game.level', _memoryGameConstantsGame.Game.Level.difficult.NAME),

    cardNameLocale: computed('card.name', function () {
      return 'components.gameCard.template.cards.' + this.get('card.name');
    }),

    cardFrontImageURL: computed('card', function () {
      return _memoryGameConfigEnvironment['default'].rootURL + 'assets/images/' + this.get('card.name') + '.png';
    }),

    cardBackImageURL: computed('card', function () {
      return _memoryGameConfigEnvironment['default'].rootURL + 'assets/images/' + _memoryGameConstantsCards.Card.BACK_IMAGE_NAME + '.png';
    }),

    actions: {
      selectCard: function selectCard() {
        if (this.get('isSelectable')) {
          this.toggleProperty('card.isTurned');
          this.sendAction('on-card-is-turned', this.get('card'));
        }
      }
    }
  });
});
define("memory-game/pods/components/game-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/components/game-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "mg-game-card waves-dark hoverable mg-game-card-back");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "mg-game-card-image");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "mg-game-card-text");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "mg-game-card waves-light hoverable mg-game-card-reverse mg-game-card-front");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "mg-game-card-image");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "mg-game-card-text");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1, 1]);
        var element3 = dom.childAt(element0, [3]);
        var element4 = dom.childAt(element3, [1, 1]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createAttrMorph(element2, 'src');
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 0, 0);
        morphs[4] = dom.createAttrMorph(element4, 'src');
        morphs[5] = dom.createMorphAt(dom.childAt(element3, [3, 1]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["mg-game-card-flipper ", ["subexpr", "if", [["get", "card.isTurned", ["loc", [null, [1, 38], [1, 51]]], 0, 0, 0, 0], "turned"], [], ["loc", [null, [1, 33], [1, 62]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["selectCard"], [], ["loc", [null, [1, 64], [1, 87]]], 0, 0], ["attribute", "src", ["concat", [["get", "cardFrontImageURL", ["loc", [null, [4, 18], [4, 35]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "t", [["get", "cardNameLocale", ["loc", [null, [7, 13], [7, 27]]], 0, 0, 0, 0]], [], ["loc", [null, [7, 9], [7, 29]]], 0, 0], ["attribute", "src", ["concat", [["get", "cardBackImageURL", ["loc", [null, [12, 18], [12, 34]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "t", ["application.title"], [], ["loc", [null, [15, 9], [15, 34]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('memory-game/pods/components/level-name/component', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  var computed = _ember['default'].computed;
  exports['default'] = Component.extend({
    tagName: 'span',

    // Model
    name: null,
    locales: {},

    levelNameLocale: computed('name', function () {
      return 'components.levelName.template.' + this.get('name');
    })
  });
});
define("memory-game/pods/components/level-name/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/components/level-name/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "t", [["get", "levelNameLocale", ["loc", [null, [1, 4], [1, 19]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 21]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('memory-game/pods/components/nav-sidebar/component', ['exports', 'ember', 'memory-game/config/environment'], function (exports, _ember, _memoryGameConfigEnvironment) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    classNames: ['mg-nav-sidebar', 'deep-orange', 'accent-3'],
    tagName: 'nav',

    logoImage: _memoryGameConfigEnvironment['default'].rootURL + 'assets/images/brainstorming.png',

    actions: {
      goToIndex: function goToIndex() {
        this.sendAction('on-go-to-index');
      }
    }
  });
});
define("memory-game/pods/components/nav-sidebar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/components/nav-sidebar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "nav-wrapper container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "id", "logo-container");
        dom.setAttribute(el2, "href", "#");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("img");
        dom.setAttribute(el3, "alt", "Memory game logo");
        dom.setAttribute(el3, "class", "responsive-img mg-image-small");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createAttrMorph(element2, 'src');
        morphs[2] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["element", "action", ["goToIndex"], [], ["loc", [null, [2, 34], [2, 56]]], 0, 0], ["attribute", "src", ["concat", [["get", "logoImage", ["loc", [null, [3, 77], [3, 86]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "change-locale", [], ["class", "right"], ["loc", [null, [6, 2], [6, 33]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define('memory-game/pods/game/level/route', ['exports', 'ember'], function (exports, _ember) {
  var Route = _ember['default'].Route;
  exports['default'] = Route.extend({

    model: function model(params) {

      var game = this.store.createRecord('game', {
        level: params.level_name
      });

      game.spawnCards();

      return game;
    },

    afterModel: function afterModel(model) {
      if (!model.get('gameCards.length')) {
        this.transitionTo('game.start');
      }
    },

    actions: {
      goBack: function goBack() {
        this.transitionTo('game.start');
      }
    }
  });
});
define("memory-game/pods/game/level/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 10,
              "column": 2
            }
          },
          "moduleName": "memory-game/pods/game/level/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "mg-game-board-finished-message deep-orange-text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "t", ["game.level.template.wellDoneYouWon"], [], ["loc", [null, [9, 63], [9, 105]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 2
            },
            "end": {
              "line": 12,
              "column": 2
            }
          },
          "moduleName": "memory-game/pods/game/level/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "mg-game-board-finished-message deep-orange-text");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["inline", "t", ["game.level.template.clickOnTheCards"], [], ["loc", [null, [11, 63], [11, 106]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/game/level/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "section center");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "header center deep-orange-text mg-title");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(": ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "btn-large waves-effect waves-light purple darken-2 mg-level-button");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [7]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element1, 0, 0);
        morphs[1] = dom.createMorphAt(element1, 2, 2);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(element0, 5, 5);
        morphs[4] = dom.createElementMorph(element2);
        morphs[5] = dom.createMorphAt(element2, 0, 0);
        morphs[6] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "t", ["game.level.template.level"], [], ["loc", [null, [2, 54], [2, 87]]], 0, 0], ["inline", "level-name", [], ["name", ["subexpr", "@mut", [["get", "model.level", ["loc", [null, [2, 107], [2, 118]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [2, 89], [2, 120]]], 0, 0], ["inline", "game-board", [], ["game", ["subexpr", "@mut", [["get", "model", ["loc", [null, [5, 22], [5, 27]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [5, 4], [5, 29]]], 0, 0], ["block", "if", [["get", "model.isFinished", ["loc", [null, [8, 8], [8, 24]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [8, 2], [12, 9]]]], ["element", "action", ["goBack"], [], ["loc", [null, [14, 85], [14, 104]]], 0, 0], ["inline", "t", ["game.level.template.finishAndGoBack"], [], ["loc", [null, [14, 105], [14, 148]]], 0, 0], ["content", "outlet", ["loc", [null, [17, 0], [17, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('memory-game/pods/game/start/route', ['exports', 'ember', 'memory-game/constants/game'], function (exports, _ember, _memoryGameConstantsGame) {
  var Route = _ember['default'].Route;
  exports['default'] = Route.extend({

    model: function model() {
      return {
        levels: _memoryGameConstantsGame.Game.LEVELS
      };
    },

    actions: {
      goToLevel: function goToLevel(levelName) {
        if (!!_memoryGameConstantsGame.Game.Level[levelName]) {
          this.transitionTo('game.level', levelName);
        }
      }
    }
  });
});
define("memory-game/pods/game/start/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 6
            },
            "end": {
              "line": 8,
              "column": 6
            }
          },
          "moduleName": "memory-game/pods/game/start/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn-large waves-effect waves-light purple darken-2 mg-level-button");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(": ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          morphs[2] = dom.createMorphAt(element0, 2, 2);
          return morphs;
        },
        statements: [["element", "action", ["goToLevel", ["get", "level", ["loc", [null, [7, 112], [7, 117]]], 0, 0, 0, 0]], [], ["loc", [null, [7, 91], [7, 119]]], 0, 0], ["inline", "t", ["game.start.template.level"], [], ["loc", [null, [7, 120], [7, 153]]], 0, 0], ["inline", "level-name", [], ["name", ["subexpr", "@mut", [["get", "level", ["loc", [null, [7, 173], [7, 178]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 155], [7, 180]]], 0, 0]],
        locals: ["level"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/game/start/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "section no-pad-bot");
        dom.setAttribute(el1, "id", "index-banner");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3, "class", "header center deep-orange-text mg-title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row center mg-button-group");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "t", ["game.start.template.selectLevel"], [], ["loc", [null, [3, 56], [3, 95]]], 0, 0], ["block", "each", [["get", "model.levels", ["loc", [null, [6, 14], [6, 26]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [6, 6], [8, 15]]]], ["content", "outlet", ["loc", [null, [13, 0], [13, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("memory-game/pods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 6
            },
            "end": {
              "line": 5,
              "column": 162
            }
          },
          "moduleName": "memory-game/pods/index/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
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
        statements: [["inline", "t", ["index.template.startGame"], [], ["loc", [null, [5, 130], [5, 162]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "memory-game/pods/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "section no-pad-bot");
        dom.setAttribute(el1, "id", "index-banner");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3, "class", "header center deep-orange-text mg-title mg-main-title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row center mg-button-group");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "t", ["application.title"], [], ["loc", [null, [3, 70], [3, 95]]], 0, 0], ["block", "link-to", ["game.start"], ["id", "start-game-button", "class", "btn-large waves-effect waves-light purple darken-2", "tagName", "button"], 0, null, ["loc", [null, [5, 6], [5, 174]]]], ["content", "outlet", ["loc", [null, [10, 0], [10, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('memory-game/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('memory-game/router', ['exports', 'ember', 'memory-game/config/environment'], function (exports, _ember, _memoryGameConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _memoryGameConfigEnvironment['default'].locationType,
    rootURL: _memoryGameConfigEnvironment['default'].rootURL,

    onDidTransition: _ember['default'].on('didTransition', function () {
      this.set('currentRoute', arguments[0]);
    })
  });

  Router.map(function () {
    this.route('index', { path: '/' });

    this.route('game', function () {
      this.route('start');
      this.route('level', { path: '/level/:level_name' });
    });
  });

  exports['default'] = Router;
});
define('memory-game/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('memory-game/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define('memory-game/transforms/object', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  var isNone = _ember['default'].isNone;
  var Transform = _emberData['default'].Transform;
  exports['default'] = Transform.extend({

    deserialize: function deserialize(serialized) {
      if (isNone(serialized)) {
        return {};
      } else {
        return serialized;
      }
    },

    serialize: function serialize(deserialized) {
      if (isNone(deserialized)) {
        return {};
      } else {
        return deserialized;
      }
    }

  });
});
define("memory-game/utils/array-utils", ["exports"], function (exports) {
  var ArrayUtils = {
    sample: function sample(array) {
      var amount = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

      return array.slice(0, amount);
    },

    shuffle: function shuffle(array) {
      var i, j, arrayLength, currentElement;

      arrayLength = array.length;

      for (i = arrayLength; i; i--) {
        j = Math.floor(Math.random() * i);
        currentElement = array[i - 1];
        array[i - 1] = array[j];
        array[j] = currentElement;
      }

      return array;
    }
  };
  exports.ArrayUtils = ArrayUtils;
});
define('memory-game/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('memory-game/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
define('memory-game/utils/uuid-generator', ['exports', 'ember-uuid/utils/uuid-generator'], function (exports, _emberUuidUtilsUuidGenerator) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberUuidUtilsUuidGenerator['default'];
    }
  });
  Object.defineProperty(exports, 'v4', {
    enumerable: true,
    get: function get() {
      return _emberUuidUtilsUuidGenerator.v4;
    }
  });
  Object.defineProperty(exports, 'v1', {
    enumerable: true,
    get: function get() {
      return _emberUuidUtilsUuidGenerator.v1;
    }
  });
  Object.defineProperty(exports, 'parse', {
    enumerable: true,
    get: function get() {
      return _emberUuidUtilsUuidGenerator.parse;
    }
  });
  Object.defineProperty(exports, 'unparse', {
    enumerable: true,
    get: function get() {
      return _emberUuidUtilsUuidGenerator.unparse;
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('memory-game/config/environment', ['ember'], function(Ember) {
  var prefix = 'memory-game';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("memory-game/app")["default"].create({"name":"memory-game","version":"0.0.0+d15ec2af"});
}

/* jshint ignore:end */
//# sourceMappingURL=memory-game.map

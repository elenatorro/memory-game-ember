export default {
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
        level:       'Nivel',
        selectLevel: 'Selecciona Nivel'
      }
    },
    level: {
      template: {
        level:           'Nivel',
        playAgain:       'Jugar otra vez',
        goBack:          'Volver atrás',
        finishAndGoBack: 'Terminar y volver atrás',
        wellDoneYouWon:  '!Muy bien! ¡Has ganado!',
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
          alpaca:       "alpaca",
          anteater:     "oso hormiguero",
          bat:          "murciélago",
          beetle:       "escarabajo",
          butterfly:    "mariposa",
          camel:        "camello",
          cat:          "gato",
          chameleon:    "camaleón",
          cobra:        "cobra",
          cow:          "vaca",
          crab:         "cangrejo",
          crocodile:    "cocodrilo",
          dog:          "perro",
          duck:         "pato",
          elephant:     "elefante",
          elk:          "alce",
          fish:         "pez",
          frog:         "rana",
          giraffe:      "jirafa",
          hen:          "gallina",
          hippopotamus: "hipopótamo",
          kangaroo:     "canguro",
          macaw:        "guacamayo",
          monkey:       "mono",
          mouse:        "ratón",
          octopus:      "pulpo",
          ostrich:      "avestruz",
          owl:          "búho",
          panda:        "panda",
          pelican:      "pelícano",
          penguin:      "pingüino",
          pig:          "cerdo",
          rabbit:       "conejo",
          raccoon:      "mapache",
          rhinoceros:   "rinoceronte",
          seaCow:       "manatí",
          shark:        "tiburón",
          sheep:        "oveja",
          sloth:        "perezoso",
          snake:        "serpiente",
          spider:       "araña",
          squirrel:     "ardilla",
          stingray:     "mantarraya",
          swan:         "cisne",
          tiger:        "tigre",
          tortoise:     "tortuga",
          toucan:       "tucán",
          whale:        "ballena"
        }
      }
    },
    levelName: {
      template: {
        easy:      'Fácil',
        medium:    'Medio',
        hard: 'Difícil'
      }
    }
  }
};

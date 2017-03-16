export default {
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
        level:       'Level',
        selectLevel: 'Select Level'
      }
    },
    level: {
      template: {
        level:           'Level',
        playAgain:       'Play again',
        goBack:          'Go back',
        finishAndGoBack: 'Finish and go back',
        wellDoneYouWon:  'Well done! You won!',
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
          alpaca:       "alpaca",
          anteater:     "anteater",
          bat:          "bat",
          beetle:       "beetle",
          butterfly:    "butterfly",
          camel:        "camel",
          cat:          "cat",
          chameleon:    "chameleon",
          cobra:        "cobra",
          cow:          "cow",
          crab:         "crab",
          crocodile:    "crocodile",
          dog:          "dog",
          duck:         "duck",
          elephant:     "elephant",
          elk:          "elk",
          fish:         "fish",
          frog:         "frog",
          giraffe:      "giraffe",
          hen:          "hen",
          hippopotamus: "hippopotamus",
          kangaroo:     "kangaroo",
          macaw:        "macaw",
          monkey:       "monkey",
          mouse:        "mouse",
          octopus:      "octopus",
          ostrich:      "ostrich",
          owl:          "owl",
          panda:        "panda",
          pelican:      "pelican",
          penguin:      "penguin",
          pig:          "pig",
          rabbit:       "rabbit",
          raccoon:      "raccoon",
          rhinoceros:   "rhinoceros",
          seaCow:       "sea-cow",
          shark:        "shark",
          sheep:        "sheep",
          sloth:        "sloth",
          snake:        "snake",
          spider:       "spider",
          squirrel:     "squirrel",
          stingray:     "stingray",
          swan:         "swan",
          tiger:        "tiger",
          tortoise:     "tortoise",
          toucan:       "toucan",
          whale:        "whale"
        }
      }
    },
    levelName: {
      template: {
        easy:      'Easy',
        medium:    'Medium',
        hard: 'Hard'
      }
    }
  }
};

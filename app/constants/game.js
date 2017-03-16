export const Game = Object.freeze({
  Level: Object.freeze({
    easy: Object.freeze({
      NAME: 'easy',
      CARDS_NUMBER: 2
    }),
    medium: Object.freeze({
      NAME: 'medium',
      CARDS_NUMBER: 4
    }),
    hard: Object.freeze({
      NAME: 'hard',
      CARDS_NUMBER: 8
    })
  }),
  LEVELS: [
    'easy',
    'medium',
    'hard'
  ],
  TURN_ANIMATION_DELAY_MILISECONDS: 1000
});

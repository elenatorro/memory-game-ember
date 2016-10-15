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
    difficult: Object.freeze({
      NAME: 'difficult',
      CARDS_NUMBER: 6
    })
  }),
  LEVELS: [
    'easy',
    'medium',
    'difficult'
  ],
  TURN_ANIMATION_DELAY_MILISECONDS: 1000
});

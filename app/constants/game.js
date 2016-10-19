export const Game = Object.freeze({
  Level: Object.freeze({
    easy: Object.freeze({
      NAME: 'easy',
      CARDS_NUMBER: 4
    }),
    medium: Object.freeze({
      NAME: 'medium',
      CARDS_NUMBER: 8
    }),
    difficult: Object.freeze({
      NAME: 'difficult',
      CARDS_NUMBER: 12
    })
  }),
  LEVELS: [
    'easy',
    'medium',
    'difficult'
  ],
  TURN_ANIMATION_DELAY_MILISECONDS: 1000
});

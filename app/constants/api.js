import config from 'memory-game/config/environment';

export const RequestURLS = Object.freeze({
  Cards: {
    GetCards: Object.freeze({
      METHOD: 'GET',
      URL:    `${config.apiURL}/cards`,
      HEADERS: Object.freeze({
        'Content-Type': 'application/json',
      })
    })
  }
});

export const ResponseStatus = Object.freeze({
  200: 'success',
  404: 'notFound',
  412: 'noGame'
});

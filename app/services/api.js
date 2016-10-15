import Ember from 'ember';
import {RequestURLS, ResponseStatus} from 'memory-game/constants/api';

export default Ember.Service.extend({
  getCards() {
    return fetch(`${RequestURLS.Cards.GetCards.URL}`, {
      method:  RequestURLS.Cards.GetCards.METHOD,
      headers: RequestURLS.Cards.GetCards.HEADERS
    })
    .then((response) => {
      return response.ok ? response.json(): Ember.RSVP.Promise.reject(ResponseStatus[response.status]);
    })
    .then((cards) => Ember.RSVP.Promise.resolve(cards))
    .catch((reason) => Ember.RSVP.Promise.reject(reason));
  }
});

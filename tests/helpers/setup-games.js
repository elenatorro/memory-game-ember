import StoreService from 'memory-game/services/store';
import CardService from 'memory-game/services/card';
import tHelper from 'ember-i18n/helper';

function setupGames(appInstance) {
  try {
    appInstance.registry.register('service:store', StoreService, {instantiate: true});
    appInstance.container.registry.injection('route:application', 'storeService', 'service:store');
    appInstance.container.lookup('service:store');

    appInstance.registry.register('service:card', CardService, {instantiate: true});
    appInstance.container.registry.injection('route:application', 'cardService', 'service:card');
    appInstance.container.lookup('service:card');

    appInstance.container.lookup('service:i18n').set('locale', 'en');
    appInstance.registry.register('helper:t', tHelper);
  } catch(reason) {
    console.warn({reason});
  }
}

export default setupGames;

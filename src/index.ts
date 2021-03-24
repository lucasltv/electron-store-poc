import * as Store from 'electron-store';
import {EConfigKeys} from './enums/EConfigKeys';

const store = new Store({
  migrations: {
    '0.0.1': store => {
      store.set('xpto', true);
    },
    '1.0.0': store => {
      store.delete('debugPhase');
      store.set('xpto2', false);
      store.set('xpto3', '1.0.0');
    },
    '1.0.2': store => {
      store.set(EConfigKeys.CONFIG_XPTO, {date: new Date()});
    },
  },
});

console.log(EConfigKeys.CONFIG_XPTO, store.get(EConfigKeys.CONFIG_XPTO));
console.log('xpto', store.get('xpto'));

import { ISagaModule } from 'redux-dynamic-modules-saga';
import { combineReducers } from 'redux';

import { ShellState } from './state';
import {
  notificationsReducer,
  Notifications_FEATURE_KEY,
} from './notifications/slice';

export function shellModule(): ISagaModule<ShellState> {
  return {
    id: 'shell',
    reducerMap: {
      shell: combineReducers({
        [Notifications_FEATURE_KEY]: notificationsReducer,
      }),
    },
    sagas: [],
  };
}

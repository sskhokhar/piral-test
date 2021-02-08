import {
  NotificationsState,
  Notifications_FEATURE_KEY,
} from './notifications/slice';

export interface ShellState {
  shell: {
    [Notifications_FEATURE_KEY]: NotificationsState;
  };
}

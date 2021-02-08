import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const Notifications_FEATURE_KEY = 'notifications';

/*
 * Update these interfaces according to your requirements.
 */
export interface NotificationsEntity {
  id: string;
}

export interface NotificationsState extends EntityState<NotificationsEntity> {}

export const notificationsAdapter = createEntityAdapter<NotificationsEntity>();

export const initialNotificationsState: NotificationsState = notificationsAdapter.getInitialState(
  {}
);

export const notificationsSlice = createSlice({
  name: Notifications_FEATURE_KEY,
  initialState: initialNotificationsState,
  reducers: {
    add: notificationsAdapter.addOne,
    remove: notificationsAdapter.removeOne,
    // ...
  },
});

/*
 * Export reducer for store configuration.
 */
export const notificationsReducer = notificationsSlice.reducer;

export const notificationsActions = notificationsSlice.actions;

const { selectAll, selectEntities } = notificationsAdapter.getSelectors();

export const getNotificationsState = (rootState: unknown): NotificationsState =>
  rootState[Notifications_FEATURE_KEY];

export const selectAllNotifications = createSelector(
  getNotificationsState,
  selectAll
);

export const selectNotificationsEntities = createSelector(
  getNotificationsState,
  selectEntities
);

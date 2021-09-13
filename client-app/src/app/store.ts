import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import showsReducer from '../features/slices/Shows/ShowsSlice';

export const store = configureStore({
  reducer: {
    shows: showsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

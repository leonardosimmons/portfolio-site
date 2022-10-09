import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { dataApi } from './data';
import uiReducer from '../features/ui/ui-slice';

export const store = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dataApi.middleware),
    devTools: process && process.env.NODE_ENV === 'development',
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const AppState = createWrapper<AppStore>(store, {
  debug: true,
});

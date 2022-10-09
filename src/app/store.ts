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

type Store = ReturnType<typeof store>;

export type AppDispatch = Store['dispatch'];
export type AppState = ReturnType<Store['getState']>;
export const AppStore = createWrapper<Store>(store, {
  debug: true,
});

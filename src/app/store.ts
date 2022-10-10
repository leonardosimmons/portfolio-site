import { configureStore, createAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

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

/** Creates a new action callback for store reducer */
export function action<S>(action: string) {
  return createAction<S>(action);
}

/** Creates new Action callback for SSG and SSR store hydration on refresh and page navigation */
export function hydrate<S>() {
  return createAction<S>(HYDRATE);
}

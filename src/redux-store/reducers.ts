import { combineReducers } from 'redux';
import { AppActions } from './action-types';

const indexPageDefaultState = {
  firstLoad: false,
  introModal: true
};


const indexPageReducer = (state = indexPageDefaultState, action: AppActions) => {
  return state
};

export const rootReducer = combineReducers({
  tempReducer: indexPageReducer
});

export type AppState = ReturnType<typeof rootReducer>;
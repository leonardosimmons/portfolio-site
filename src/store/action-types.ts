
import { ThunkAction } from 'redux-thunk';
import { ContactMeFormActions } from '../containers/pages/contact/action-types';
import { AppState } from './reducers';


export type AppActions = ContactMeFormActions;

export type AppThunk = ThunkAction<void, AppState, unknown, AppActions>;
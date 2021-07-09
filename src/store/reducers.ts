
import { combineReducers } from 'redux';
import { contactMeFormReducer } from '../containers/pages/contact/reducer';


export const rootReducer = combineReducers({
  contact_me_form: contactMeFormReducer
});


export type AppState = ReturnType<typeof rootReducer>;
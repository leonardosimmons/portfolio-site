
import { AppActions } from '../../../store/action-types';
import { ContactMeForm } from '../../../utils/types';

import { 
  RESET_CONTACT_ME_FORM,
  SET_EMAIL, 
  SET_FIRSTNAME, 
  SET_LASTNAME, 
  SET_MESSAGE, 
  SET_SUBJECT 
} from './action-types';


const contactMeFormInitialState: ContactMeForm = {
  firstname: '',
  lastname: '',
  subject: '',
  email: '',
  message: '',
};


export function contactMeFormReducer(state = contactMeFormInitialState, action: AppActions): ContactMeForm {
  switch(action.type) {
    case RESET_CONTACT_ME_FORM:
      return state = contactMeFormInitialState;
    case SET_FIRSTNAME:
      return {...state, firstname: action.payload};
    case SET_LASTNAME:
      return {...state, lastname: action.payload};
    case SET_SUBJECT:
      return {...state, subject: action.payload};
    case SET_EMAIL:
      return {...state, email: action.payload};
    case SET_MESSAGE:
      return {...state, message: action.payload};
    default: 
      return state;
  };
};
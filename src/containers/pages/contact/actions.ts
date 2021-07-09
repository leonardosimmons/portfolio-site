
import { AppActions } from '../../../store/action-types';
import { RESET_CONTACT_ME_FORM, SET_EMAIL, SET_FIRSTNAME, SET_LASTNAME, SET_MESSAGE, SET_SUBJECT } from './action-types'


export function resetContactMeForm(): AppActions {
  return {
    type: RESET_CONTACT_ME_FORM
  };
};

export function setFirstName(fn: string): AppActions {
  return {
    type: SET_FIRSTNAME,
    payload: fn
  };
};

export function setLastname(ln: string): AppActions {
  return {
    type: SET_LASTNAME,
    payload: ln
  };
};

export function setSubject(sub: string): AppActions {
  return {
    type: SET_SUBJECT,
    payload: sub
  };
};

export function setEmail(e: string): AppActions {
  return {
    type: SET_EMAIL,
    payload: e
  };
};

export function setMessage(msg: string): AppActions {
  return {
    type: SET_MESSAGE,
    payload: msg
  };
};

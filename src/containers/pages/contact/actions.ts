
import { AxiosResponse } from 'axios';
import React from 'react';
import { HttpController } from '../../../helpers/HttpController';
import { AppActions, AppThunk } from '../../../store/action-types';
import { AppState } from '../../../store/reducers';
import { ContactMeForm, HttpServerResponse } from '../../../utils/types';
import { RESET_CONTACT_ME_FORM, SET_EMAIL, SET_FIRSTNAME, SET_LASTNAME, SET_MESSAGE, SET_SUBJECT } from './action-types'


//* Actions
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


//* Thunk
export function submitContactMeForm(): AppThunk {
  return async (_: React.Dispatch<AppActions>, getState: () => AppState) => {
    const http: HttpController = new HttpController();
    const form: ContactMeForm = getState().contact_me_form;

    try {
      await http.post(process.env.NEXT_PUBLIC_CONTACT_ME_FORM_SUBMIT as string, {
        firstname: form.firstname,
        lastname: form.lastname,
        subject: form.subject,
        email: form.email,
        message: form.message
      });
    }
    catch(err) {
      console.log(err);
    }
  };
};

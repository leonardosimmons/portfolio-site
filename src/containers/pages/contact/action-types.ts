
export const RESET_CONTACT_ME_FORM = 'reset_contact_me_form'
export const SET_FIRSTNAME = 'set_firstname';
export const SET_LASTNAME = 'set_lastname';
export const SET_SUBJECT = 'set_subject';
export const SET_EMAIL = 'set_email';
export const SET_MESSAGE = 'set_message';


export type ResetContactMeFormAction = {
  type: typeof RESET_CONTACT_ME_FORM;
};

export type SetFirstnameAction = {
  type: typeof SET_FIRSTNAME;
  payload: string;
};

export type SetLastnameAction = {
  type: typeof SET_LASTNAME;
  payload: string;
};

export type SetSubjectAction = {
  type: typeof SET_SUBJECT;
  payload: string;
};

export type SetEmailAction = {
  type: typeof SET_EMAIL;
  payload: string;
};

export type SetMessageAction = {
  type: typeof SET_MESSAGE;
  payload: string;
};


export type ContactMeFormActions = ResetContactMeFormAction | SetFirstnameAction | SetLastnameAction | SetSubjectAction | SetEmailAction | SetMessageAction;

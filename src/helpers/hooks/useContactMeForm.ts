
import React from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { ContactMeForm } from '../../utils/types';
import { 
  resetContactMeForm, 
  setEmail, 
  setFirstName, 
  setLastname, 
  setMessage, 
  setSubject, 
  submitContactMeForm
} from '../../containers/pages/contact/actions';

import { handleInputRef, handleTextAreaRef } from '../functions';
import { ValidationController } from '../ValidationController';


function useContactMeForm() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.contact_me_form);
  const validator: ValidationController = new ValidationController();

  const fnRef = React.useRef<string>('');
  const lnRef = React.useRef<string>('');
  const subRef = React.useRef<string>('');
  const eRef = React.useRef<string>('');
  const mRef = React.useRef<string>('');

  const inputFn = React.useCallback(handleInputRef(fnRef), []);
  const inputLn = React.useCallback(handleInputRef(lnRef), []);
  const inputSub = React.useCallback(handleInputRef(subRef), []);
  const inputEmail = React.useCallback(handleInputRef(eRef), []);

  const handleMsg = React.useCallback(handleTextAreaRef(mRef), []);

  const inputs = React.useRef<Array<(e: React.ChangeEvent<HTMLInputElement>) => void>>([
    inputFn,
    inputLn,
    inputSub,
    inputEmail
  ]);
  
  const submit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();

    validator.contactMeForm(fnRef.current, lnRef.current, subRef.current, eRef.current, mRef.current);

    if (validator.isValidated) {

      dispatch(setFirstName(fnRef.current));
      dispatch(setLastname(lnRef.current));
      dispatch(setSubject(subRef.current));
      dispatch(setEmail(eRef.current));
      dispatch(setMessage(mRef.current));
      
      dispatch(submitContactMeForm());
      
      return;
    }
    
    alert(validator.error);
    return;
  }, []);

  const reset = React.useCallback(() => {
    dispatch(resetContactMeForm());
  }, []);

  function createToken(): ContactMeForm {
    return {
      firstname: fnRef.current,
      lastname: lnRef.current,
      subject: subRef.current,
      email: eRef.current,
      message: mRef.current
    };
  };

  return {
    value,
    inputs,
    handleMsg,
    createToken,
    submit,
    reset
  }
};

export { useContactMeForm };

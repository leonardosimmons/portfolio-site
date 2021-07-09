
import React from 'react';

import styles from './Form.module.scss';

import Input from '../../../../components/base/input';
import { Text } from '../../../../utils/types';


type Props = {
  placeholders: Text[];
  handlers: Array<(e: React.ChangeEvent<HTMLInputElement>) => void>;
  msgHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  submit: (e: React.FormEvent) => void;
  reset: () => void;
};


const ContactMeForm: React.FunctionComponent<Props> = ({ placeholders, handlers, msgHandler, submit, reset }): JSX.Element => {
  return (
    <form className={styles.contactForm} onSubmit={submit}>
      <div className={styles.inputBox}>
        {
          placeholders.map((placeholder: Text, index: number) => (
            <Input 
              key={index}
              id={placeholder.text} 
              styles={styles} 
              autoComplete={false}
              placeholder={placeholder.text}
              changed={handlers[index]} 
            />
          ))
        }
        <textarea className={styles.textarea} placeholder={'Please enter message here...'} onChange={msgHandler}/>
      </div>
      <div className={styles.btnBox}>
        <Input id={'reset'} type={'reset'} value={'RESET'} classes={'relative btn-hoverConfig btn-activeFocus'} clicked={reset}/>
        <Input id={'submit'} type={'submit'} value={'SUBMIT'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
      </div>
    </form>
  );
};

export default ContactMeForm;

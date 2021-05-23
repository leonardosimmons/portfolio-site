
import React from 'react';

import styles from './Form.module.scss';

import Input from '../../../../components/base/input';
import { Text } from '../../../../utils/types';


type Props = {
  placeholders: Text[];
};


const ContactMeForm: React.FunctionComponent<Props> = ({ placeholders }): JSX.Element => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.inputBox}>
        {
          placeholders.map((placeholder: Text, index: number) => (
            <Input 
              key={index} 
              styles={styles} 
              autoComplete={false}
              placeholder={placeholder.text} 
            />
          ))
        }
        <textarea className={styles.textarea} placeholder={'Please enter message here...'}/>
      </div>
      <div className={styles.btnBox}>
        <Input type={'reset'} value={'RESET'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
        <Input type={'submit'} value={'SUBMIT'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
      </div>
    </form>
  );
};

export default ContactMeForm;

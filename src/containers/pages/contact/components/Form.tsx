
import React from 'react';

import styles from './Form.module.scss';

import Input from '../../../../components/base/input';


type Props = {

};


const ContactMeForm: React.FunctionComponent<Props> = ({}): JSX.Element => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.inputBox}>
        <Input styles={styles} placeholder={'First Name'} autoComplete={false}/>
        <Input styles={styles} placeholder={'Last Name'} autoComplete={false}/>
        <Input styles={styles} placeholder={'Subject'} autoComplete={false}/>
        <Input styles={styles} placeholder={'Email'} autoComplete={false}/>
        <textarea className={styles.textarea} placeholder={'Please enter message here...'}/>
      </div>
      <div className={styles.btnBox}>
        <Input type={'submit'} value={'SUBMIT'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
        <Input type={'reset'} value={'RESET'} classes={'relative btn-hoverConfig btn-activeFocus'}/>
      </div>
    </form>
  );
};

export default ContactMeForm;

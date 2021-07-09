
import React from 'react';
import axios from 'axios';
import { page } from '../utils/keys';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ContactPageStaticData } from '../utils/types';

import styles from '../containers/pages/contact/Contact.module.scss';
import headerStyles from '../containers/pages/contact/Header.module.scss';

import Layout from '../containers/layout';
import Footer from '../containers/footer';
import Container from '../components/base/container';
import Box from '../components/base/box';
import Heading from '../components/heading';
import Form from '../containers/pages/contact/components/Form';
import BaseHeading from '../components/heading';
import { handleInputRef, handleTextArea, handleTextAreaRef } from '../helpers/functions';
import { useAppDispatch } from '../helpers/hooks/redux';
import { resetContactMeForm, setEmail, setFirstName, setLastname, setMessage, setSubject } from '../containers/pages/contact/actions';


function ContactPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element 
{
  const dispatch = useAppDispatch();  

  const fnRef = React.useRef<string>('');
  const lnRef = React.useRef<string>('');
  const subRef = React.useRef<string>('');
  const eRef = React.useRef<string>('');
  const mRef = React.useRef<string>('');

  const handleFn = React.useCallback(handleInputRef(fnRef), []);
  const handleLn = React.useCallback(handleInputRef(lnRef), []);
  const handleSub = React.useCallback(handleInputRef(subRef), []);
  const handleEmail = React.useCallback(handleInputRef(eRef), []);
  const handleMsg = React.useCallback(handleTextAreaRef(mRef), []);

  const handlersRef = React.useRef<Array<(e: React.ChangeEvent<HTMLInputElement>) => void>>([
    handleFn,
    handleLn,
    handleSub,
    handleEmail
  ]);
  
  const handleSubmit = React.useCallback((e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setFirstName(fnRef.current));
    dispatch(setLastname(lnRef.current));
    dispatch(setSubject(subRef.current));
    dispatch(setEmail(eRef.current));
    dispatch(setMessage(mRef.current));
  }, []);

  const resetForm = React.useCallback(() => {
    dispatch(resetContactMeForm());
  }, []);

  return (
    <Layout
      title={data.page.title}
      classes={'relative'}
      styles={styles}
      desktop={data.nav.desktop}
      mobile={data.nav.mobile}
      header={
        <div
          className={`${headerStyles.wrapper} noselect`} 
          style={{ backgroundImage: `${'url(' + data.page.header.src + ')'}`}}>
          <BaseHeading classes={headerStyles.wrapperText}>
            <h1>{data.page.header.text}</h1>
          </BaseHeading>
        </div>
      }
      footer={
        <Footer 
          parent={page.CONTACT} 
          data={data.footer}
        />
      }
    >
      <Container main styles={styles} classes={'relative noselect'}>
        <div className={styles.spacer} />
        <Box styles={styles}>
          <Heading classes={styles.headingBox}>
            <h1 className={styles.heading}>
              <span>{data.page.heading.spanOne}</span>
            </h1>
            <p>{data.page.heading.body}</p>
          </Heading>
          <Form 
            placeholders={data.page.placeholders}
            handlers={handlersRef.current}
            msgHandler={handleMsg}
            submit={handleSubmit}
            reset={resetForm}
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactPage;


export const getStaticProps: GetStaticProps = async () => {
  const data: ContactPageStaticData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: {'Content-Type': 'application/json'} }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: {'Content-Type': 'application/json'} }),
    axios.get(process.env.CONTACT_PAGE_API as string, { headers: {'Content-Type': 'application/json'} }),
    axios.get(process.env.FOOTER_API as string, { headers: {'Content-Type': 'application/json'}})
  ])
  .then(axios.spread((desktop, mobile, page, footer) => {
    if (desktop.status === 200 && mobile.status === 200 && page.status === 200 && footer.status === 200) {
      const dataToken: ContactPageStaticData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        page: page.data,
        footer: footer.data
      };

      return dataToken
    }
  }))
  .catch(err => {
    throw new Error(err.message);
  });

  return {
    props: {
      data: data as ContactPageStaticData
    }
  };
};

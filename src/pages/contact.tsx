
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ContactPageStaticData } from '../utils/types';

import styles from '../containers/pages/contact/Contact.module.scss';

import Layout from '../containers/layout';
import Footer from '../containers/footer';
import Container from '../components/base/container';
import Box from '../components/base/box/BaseBox';
import Heading from '../components/heading';
import Form from '../containers/pages/contact/components/Form';



function ContactPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element 
{
  return (
    <Layout
      title={'Leonardo Simmons | Contact Me'}
      classes={'relative'}
      styles={styles}
      desktop={data.nav.desktop}
      mobile={data.nav.mobile}
      footer={<Footer data={data.footer}/>}
    >
      <Container main styles={styles} classes={'relative noselect'}>
        <Box styles={styles}>
          <Heading classes={styles.headingBox}>
            <h1 className={styles.heading}>
              <span>{'Write a Message'}</span>
              <span>{'Contact Me'}</span>
            </h1>
            <p>{'We love challenges and work with any type of projects: financial debt, rebranding, company\'s audit - we can handle all your requests'}</p>
          </Heading>
          <Form />
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
    axios.get(process.env.FOOTER_API as string, { headers: {'Content-Type': 'application/json'}})
  ])
  .then(axios.spread((desktop, mobile, footer) => {
    if (desktop.status === 200 && mobile.status === 200 && footer.status === 200) {
      const dataToken: ContactPageStaticData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
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

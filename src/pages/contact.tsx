
import React from 'react';
import axios from 'axios';
import { page } from '../utils/keys';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ContactPageStaticData } from '../utils/types';

import styles from '../containers/pages/contact/Contact.module.scss';

import Layout from '../containers/layout';
import Footer from '../containers/footer';
import Container from '../components/base/container';
import Box from '../components/base/box';
import Heading from '../components/heading';
import Form from '../containers/pages/contact/components/Form';


function ContactPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element 
{
  return (
    <Layout
      title={data.page.title}
      classes={'relative'}
      styles={styles}
      desktop={data.nav.desktop}
      mobile={data.nav.mobile}
      footer={
        <Footer 
          parent={page.CONTACT} 
          data={data.footer}
        />
      }
    >
      <Container main styles={styles} classes={'relative noselect'}>
        <Box styles={styles}>
          <Heading classes={styles.headingBox}>
            <h1 className={styles.heading}>
              <span>{data.page.heading.spanOne}</span>
              <span>{data.page.heading.spanTwo}</span>
            </h1>
            <p>{data.page.heading.body}</p>
          </Heading>
          <Form placeholders={data.page.placeholders}/>
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

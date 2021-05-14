
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IndexPageStaticData } from '../utils/types';

import styles from '../containers/pages/index/Index.module.scss';

import Layout from '../containers/layout';
import Container from '../components/container';
import IndexMainHeader from '../containers/pages/index/header/MainHeader';


function Index({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout
      title={'Leonardo Simmons | Home'}
      classes={'relative'}
      styles={styles}
      desktop={config.nav.desktop}
      mobile={config.nav.mobile}
      header={
        <IndexMainHeader 
          classes={'relative'}
          headers={config.page.mainHeader}
        />
      } 
    >
      <Container main styles={styles}>
        
      </Container>
    </Layout>
  );
};

export default Index;


export const getStaticProps: GetStaticProps = async() => {
  const data: IndexPageStaticData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, {headers: {'Content-Type': 'application/json'}}),
    axios.get(process.env.NAVBAR_MOBILE_API as string, {headers: {'Content-Type': 'application/json'}}),
    axios.get(process.env.INDEX_PAGE_API as string, {headers: {'Content-Type': 'application/json'}}),
  ])
  .then(axios.spread((desktop, mobile, page) => {
    if (desktop.status === 200 && mobile.status === 200 && page.status === 200) 
    {
      const dataToken: IndexPageStaticData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        page: page.data
      };

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(err.message);
  });

  return {
    props: {
      config: data as IndexPageStaticData
    }
  };
};

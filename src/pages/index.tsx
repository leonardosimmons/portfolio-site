
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IndexPageStaticData } from '../utils/types';

import styles from '../containers/pages/index/Index.module.scss';

import Layout from '../containers/layout';
import Container from '../components/base/container';
import IndexMainHeader from '../containers/pages/index/header/MainHeader';
import SectionOne from '../containers/pages/index/section/one';
import MissionStatement from '../containers/pages/index/section/mission-statement';


function Index({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout
      title={data.page.title}
      classes={'relative'}
      styles={styles}
      desktop={data.nav.desktop}
      mobile={data.nav.mobile}
      header={
        <IndexMainHeader 
          autoplayLength={5}
          classes={'relative'}
          headers={data.page.mainHeader}
        />
      } 
    >
      <Container main styles={styles}>
        <SectionOne />
        <MissionStatement /> 
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
      data: data as IndexPageStaticData
    }
  };
};

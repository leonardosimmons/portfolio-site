
import React from 'react';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import { IndexPageStaticData } from '../utils/types';

import styles from '../containers/pages/index/Index.module.scss';

import Layout from '../containers/layout';
import Container from '../components/base/container';
import IndexMainHeader from '../containers/pages/index/header';
import AboutSection from '../containers/pages/index/section/about';
import MissionStatement from '../containers/pages/index/section/mission-statement';
import Features from '../containers/pages/index/section/features';
import Serivces from '../containers/pages/index/section/services';
import Footer from '../containers/footer';


function Index({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <Layout
      parent={'home'}
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
      footer={
        <Footer 
          parent={'home'}
          data={data.footer}
        />
      } 
    >
      <Container main styles={styles}>
        <AboutSection data={data.page.about}/>
        <MissionStatement data={data.page.mission}/>
        <Features data={data.page.features}/>
        <Serivces data={data.page.services}/>
      </Container>
    </Layout>
  );
};

export default Index;


export const getServerSideProps: GetServerSideProps = async() => {
  const data: IndexPageStaticData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: {'Content-Type': 'application/json'} }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: {'Content-Type': 'application/json'} }),
    axios.get(process.env.INDEX_PAGE_API as string, { headers: {'Content-Type': 'application/json'} }),
    axios.get(process.env.FOOTER_API as string, { headers: {'Content-Type': 'application/json'}})
  ])
  .then(axios.spread((desktop, mobile, page, footer) => {
    if (desktop.status === 200 && mobile.status === 200 && page.status === 200 && footer.status === 200) 
    {
      const dataToken: IndexPageStaticData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        page: page.data,
        footer: footer.data
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

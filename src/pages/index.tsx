import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import styles from '../containers/pages/index/Index.module.scss';

import Layout from '../containers/layout';


function Index({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  console.log(config);
  return (
    <Layout
      title={'Leonardo Simmons | Home'}
      classes={'relative'}
      styles={styles}
      desktop={ config.nav.desktop }
    >

    </Layout>
  );
};

export default Index;


export const getStaticProps: GetStaticProps = async() => {
  const data = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, {headers: {'Content-Type': 'application/json'}}),
    axios.get(process.env.INDEX_PAGE_API as string, {headers: {'Content-Type': 'application/json'}}),
  ])
  .then(axios.spread((desktop, index) => {
    if (desktop.status === 200 && index.status === 200) 
    {
      const dataToken = {
        nav: {
          desktop: desktop.data
        },
        page: index.data
      };

      return dataToken;
    }
  }))
  .catch(err => {
    throw new Error(err.message);
  });

  return {
    props: {
      config: data
    }
  };
};

import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import styles from '../containers/pages/index/Index.module.scss';

import Layout from '../containers/layout';


function Index({ config }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout
      parent={'home'}
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
    axios.get(process.env.NAVBAR_DESKTOP_API as string, {headers: {'Content-Type': 'application/json'}})
  ])
  .then(axios.spread((desktop: any) => {
    if (desktop.status === 200) 
    {
      const dataToken = {
        nav: {
          desktop: desktop.data
        }
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

import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import Layout from '../../lib/components/layout/Layout';

export default function Index({
  pageTitle,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <Layout title={pageTitle}>
      <div>{title}</div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageTitle:
        'Full Stack Web Developer & Software Engineer Portland, Oregon',
      title: 'Welcome to Leonardo Simmons portfolio site!',
    },
  };
};

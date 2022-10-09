import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { AppStore } from '../app/store';
import {
  getHomePageData,
  getRunningOperationPromises,
  useGetHomePageDataQuery,
} from '../app/data';
import { useViewport } from '../app/hooks';

import Layout from '../../lib/components/layout/Layout';
import Heading from '../../lib/components/heading/Heading';

export default function Index({}: InferGetStaticPropsType<
  typeof getStaticProps
>): JSX.Element {
  useViewport();
  const { data: page } = useGetHomePageDataQuery();

  return (
    <Layout title={page!.metaTitle}>
      <Heading {...page!.heading.main} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = AppStore.getStaticProps(
  (store) => async (_) => {
    store.dispatch(getHomePageData.initiate());

    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  },
);

import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { HomePageData } from '../../lib/types';
import { Http } from '../../lib/http';

import Layout from '../../lib/components/layout/Layout';
import Heading from '../../lib/components/heading/Heading';

export default function Index({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const [page] = React.useState<HomePageData>(data);

  return (
    <Layout title={data.metaTitle}>
      <Heading {...page.heading.main} />
    </Layout>
  );
}

const { HOME_PAGE_DATA } = process.env;

export const getStaticProps: GetStaticProps = async (_) => {
  const data = await Http.get<HomePageData>(HOME_PAGE_DATA as string);

  return {
    props: {
      data,
    },
  };
};

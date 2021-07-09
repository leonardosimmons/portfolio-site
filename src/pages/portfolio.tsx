
import React from 'react';
import axios from 'axios';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { PortfolioPageStaticData, ProjectToken } from '../utils/types';
import { page } from '../utils/keys';

import styles from '../containers/pages/portfolio/Portfolio.module.scss';
import headerStyles from '../containers/pages/portfolio/Header.module.scss';

import Layout from '../containers/layout';
import FooterSection from '../containers/footer';
import Container from '../components/base/container';
import Box from '../components/base/box';
import ProjectCard from '../containers/pages/portfolio/components/ProjectCard';
import BaseHeading from '../components/heading/Heading';


export const getStaticProps: GetStaticProps = async () => {
  const data: PortfolioPageStaticData | undefined = await axios.all([
    axios.get(process.env.NAVBAR_DESKTOP_API as string, { headers: {'Content-Type': 'application/json'} }),
    axios.get(process.env.NAVBAR_MOBILE_API as string, { headers: {'Content-Type': 'application/json'} }),
    axios.get(process.env.FOOTER_API as string, { headers: {'Content-Type': 'application/json'}}),
    axios.get(process.env.PORTFOLIO_PAGE_API as string, { headers: {'Content-Type': 'application/json'}}),
  ])
  .then(axios.spread((desktop, mobile, footer, projects) => {
    if (desktop.status === 200 && mobile.status === 200 && footer.status === 200, projects.status === 200) {
      const dataToken: PortfolioPageStaticData = {
        nav: {
          desktop: desktop.data,
          mobile: mobile.data
        },
        projects: projects.data,
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
      data: data as PortfolioPageStaticData
    }
  };
};


function PortfolioPage({ data }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element
{
  return (
    <Layout
      parent={page.PORTFOLIO}
      title={'Leonardo Simmons | Portfolio'}
      styles={styles}
      desktop={data.nav.desktop}
      mobile={data.nav.mobile}
      header={
        <>
          <div className={headerStyles.spacer} />
          <div
            className={`${headerStyles.wrapper} noselect`} 
            style={{ backgroundImage: `${'url(\'/images/svg/undraw_collecting_fjjl.svg\')'}`}}>
            <BaseHeading classes={headerStyles.wrapperText}>
              <h1>Portfolio</h1>
            </BaseHeading>
            <div className={headerStyles.wrapperSpacer} />
          </div>
        </>
      }
      footer={
        <FooterSection 
          parent={page.PORTFOLIO} 
          data={data.footer}
        />
      }
    >
    <Container main styles={styles}>
      <Box styles={styles}>
      {data.projects.map((project: ProjectToken, index: number) => (
        <ProjectCard key={index} project={project} />
      ))}
      </Box>
    </Container>
    </Layout>
  )
};

export default PortfolioPage;

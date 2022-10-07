import React from 'react';
import Head from 'next/head';

import desktopNavbarStyles from '../navbar/desktop.module.scss';
import styles from './layout.module.scss';

import DesktopNavbar from '../navbar/DesktopNavbar';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <header className={styles.header}>
        <DesktopNavbar styles={desktopNavbarStyles} />
      </header>
      <main className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
        <div className={'top-of-site-pixel-anchor'} />
      </main>
    </React.Fragment>
  );
};

export default Layout;

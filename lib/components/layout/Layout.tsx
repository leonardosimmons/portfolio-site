import React from 'react';
import Head from 'next/head';
import { BaseProps } from '../../../src/app/types';

import base from './layout.module.scss';

import DesktopNavbar from '../navbar/DesktopNavbar';

export type LayoutProps = BaseProps & {
  title: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  title,
  styles,
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
      <DesktopNavbar />
      <main className={`noselect ${base.wrapper} ${styles && styles.wrapper}`}>
        <div className={`${base.container} ${styles && styles.container}`}>
          {children}
        </div>
        <div className={'top-of-site-pixel-anchor'} />
      </main>
    </React.Fragment>
  );
};

export default Layout;

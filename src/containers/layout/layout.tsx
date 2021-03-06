import Head from 'next/head';
import React from 'react';

import DesktopNavbar from '../navbar/desktop';
import MobileNavbar from '../navbar/mobile';


type Props = {
  title: string;
  desktop: any;
  mobile: any;
  styles: any;
  parent?: any;
  classes?: string;
  desktopNav?: JSX.Element | HTMLElement;
  mobileNav?: JSX.Element | HTMLElement;
  header?: JSX.Element | HTMLElement;
  footer?: JSX.Element | HTMLElement;
};

const Layout: React.FunctionComponent<Props> = (
  { 
    title,
    desktopNav,
    desktop, 
    mobileNav, 
    mobile,
    header,
    footer,
    styles,
    classes,
    parent,
    children 
  }
): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{ title }</title>
        <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      </Head>
      <div id="backdrop-root"/>
      <div id="modal-root"/>
      <div id="app" className={`${ styles.page || '' } ${ classes || '' }`}>
        <nav className={`${ styles.nav || '' }`}>
          { desktopNav || <DesktopNavbar parent={parent} data={ desktop }/> }
          { mobileNav || <MobileNavbar data={ mobile }/> }
        </nav>
        { header && <header className={`${ styles.header || '' }`}>{ header }</header> }
        { children && <main className={`${ styles.main || '' }`}>{ children }</main> }
        { footer && <footer className={`${ styles.footer || '' }`}>{ footer }</footer> }
        <div id="top-of-site-pixel-anchor" />
      </div>
    </React.Fragment>
  );
};

export default Layout;

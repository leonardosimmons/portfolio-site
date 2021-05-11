import Head from 'next/head';
import React from 'react';
import { page } from '../../utils/keys';


type Props = {
  parent: string;
  title: string;
  desktop: any;
  mobile: any;
  styles: any;
  solid?: boolean;
  classes?: string;
  desktopNav?: JSX.Element | HTMLElement;
  mobileNav?: JSX.Element | HTMLElement;
  header?: JSX.Element | HTMLElement;
  footer?: JSX.Element | HTMLElement;
};

const Layout: React.FunctionComponent<Props> = (
  { 
    parent,
    title,
    desktopNav,
    desktop, 
    mobileNav, 
    mobile,
    header,
    footer,
    styles,
    classes,
    solid,
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
      <div id="backdrop-root" />
      <div id="modal-root" />
      <div id="app" className={`${ styles.page || '' } ${ classes }`}>
        <nav className={`${ styles.nav || '' } ${ parent ? parent + '__nav' : ''}`}>
          {/* desktopNav || <DesktopNavBar solid=/*solid } config={ desktop } /> */}
          {/* mobileNav || <MobileNavbar config={ m/*obile }/> */}
        </nav>
        { header && <header className={`${ styles.header || '' } ${ parent ? parent + '__header' : ''}`}>{ header }</header> }
        { children && <main className={`${ styles.main || '' } ${ parent ? parent + '__main' : ''}`}>{ children }</main> }
        { footer && <footer className={`${ styles.footer || '' } ${ parent ? parent + '__footer' : ''}`}>{ footer }</footer> }
        <div id="top-of-site-pixel-anchor" />
      </div>
    </React.Fragment>
  );
};

export default Layout;

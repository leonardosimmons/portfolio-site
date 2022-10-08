import React from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
import { BaseProps } from '../../../src/app/types';

import base from './desktop.module.scss';

export type DesktopNavbarProps = BaseProps & {
  logo?: string;
};

const DesktopNavbar: React.FunctionComponent<DesktopNavbarProps> = ({
  logo,
  styles,
}): JSX.Element => {
  return (
    <nav className={`noselect ${base.wrapper} ${styles && styles.wrapper}`}>
      <div className={`${base.logo} ${styles && styles.logo}`}>
        <Link href={'/'}>
          <Image
            className={'pressable'}
            src={logo || '/images/logo.png'}
            alt={'logo'}
            width={55}
            height={55}
          />
        </Link>
      </div>
      <div className={`${base.menu} ${styles && styles.menu}`}>
        <ul>
          <li className={'hoverable pressable'}>01. About</li>
          <li className={'hoverable pressable'}>02. Portfolio</li>
          <li className={'hoverable pressable'}>03. Experience</li>
        </ul>
      </div>
      <div className={`${base.user} ${styles && styles.user}`}>
        <p className={'pressable'}>Contact</p>
        <button className={'btn pressable'}>Free Consultation</button>
      </div>
    </nav>
  );
};

export default DesktopNavbar;

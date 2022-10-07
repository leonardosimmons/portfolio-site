import React from 'react';

import Link from 'next/link';
import Image from 'next/future/image';

type Props = {
  styles: any;
};

const DesktopNavbar: React.FunctionComponent<Props> = ({
  styles,
}): JSX.Element => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <Image
            className={'pressable'}
            src={'/images/logo.png'}
            alt={'logo'}
            width={75}
            height={75}
          />
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <li className={'hoverable pressable'}>01. About</li>
          <li className={'hoverable pressable'}>02. Portfolio</li>
          <li className={'hoverable pressable'}>03. Experience</li>
        </ul>
      </div>
      <div className={styles.user}>
        <p className={'pressable'}>Contact</p>
        <button className={'btn pressable'}>Free Consultation</button>
      </div>
    </nav>
  );
};

export default DesktopNavbar;

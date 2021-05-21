
import React from 'react';
import Image from 'next/image';

import styles from './Footer.module.scss';

import Container from '../../components/base/container';
import Grid from '../../components/base/grid';


type Props = {

};


const tabs = ['Services', 'Portfolio', 'Contact'];

const Footer: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'noselect'}>
      <Grid even grid={styles.grid}>
        <div className={styles.links}>
          {
            tabs.map((tab, index) => (
              <p key={index}>{tab}</p>
            ))
          }
        </div>
        <div className={styles.logoBox}>
          <Image 
            src={'/images/png/logo.png'}
            alt={'logo'}
            width={100}
            height={100} 
          />
        </div>
        <div className={styles.copyright}>
          <p>{'Built by LEONARDO SIMMONS for this test page for ADVANCED CSS & HTML. Here includes a bunch of other text. So et voila, this is not for legal or resale purposes. DEMONSTRATION ONLY!!'}</p>
        </div>
      </Grid>
    </Container>
  );
};

export default Footer;

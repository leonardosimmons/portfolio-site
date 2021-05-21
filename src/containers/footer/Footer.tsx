
import React from 'react';
import Image from 'next/image';
import { Footer, NamedLink } from '../../utils/types';

import styles from './Footer.module.scss';

import Container from '../../components/base/container';
import Grid from '../../components/base/grid';
import TabLink from '../../components/link/NamedLink';


type Props = {
  data: Footer
};


const FooterSection: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'noselect'}>
      <Grid even grid={styles.grid}>
        <div className={styles.links}>
          {
            data.links.map((tab: NamedLink, index: number) => (
              <TabLink
                key={index} 
                name={tab.name}
                link={tab.link}
              />
            ))
          }
        </div>
        <div className={styles.logoBox}>
          <Image 
            src={data.logo.src}
            alt={data.logo.alt}
            width={data.logo.width as number}
            height={data.logo.height as number} 
          />
        </div>
        <div className={styles.copyright}>
          <p>{data.copyright}</p>
          <p>&copy; 2021</p>
        </div>
      </Grid>
    </Container>
  );
};

export default FooterSection;

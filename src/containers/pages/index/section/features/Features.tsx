
import React from 'react';
import Image from 'next/image';

import styles from './Features.module.scss';

import Container from '../../../../../components/base/container';
import Grid from '../../../../../components/base/grid';
import Box from '../../../../../components/base/box';
import BaseHeading from '../../../../../components/heading';


type Props = {

};


const Features: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Grid even grid={styles.grid}>
        <Box styles={styles}>
          <BaseHeading 
            classes={styles.headingBox}
            btn={{ 
              text: 'Inspect Our Features', 
              link: '/' 
            }}
            btnStyles={styles.btn}>
            <h2 className={styles.heading}>
              <span>{'I\'m here for you'}</span>
              <span>{'I Help Build'}</span>
              <span>{'Professional Buisness Plans'}</span>
            </h2>
            <p>{'Our experts know how to get maximum profit out of every investment project. Entrust us with your assets and enjoy your daily life!'}</p>
          </BaseHeading>
          <Container classes={styles.cardBox}>
            <div className={styles.card}>
              <p>{'We work to ensure that your business prospers and brings you sufficient profit with a long perspective. We appreciate your trust greatly!'}</p>
              <p>{'Leonardo Simmons'}</p>
              <p>{'Easy Company Founder'}</p>
            </div>
          </Container>
        </Box>
        <Box styles={styles} classes={'relative'}>
          <Image
            src={'/images/svg/undraw_real-time_sync_o57k.svg'} 
            alt={'photo'}
            layout={'fill'}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default Features;

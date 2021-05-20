
import React from 'react';
import Image from 'next/image';
import { IndexPageFeaturesSection } from '../../../../../utils/types';

import styles from './Features.module.scss';

import Container from '../../../../../components/base/container';
import Grid from '../../../../../components/base/grid';
import Box from '../../../../../components/base/box';
import BaseHeading from '../../../../../components/heading';


type Props = {
  data: IndexPageFeaturesSection
};


const Features: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
  console.log(data)
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Grid even grid={styles.grid}>
        <Box styles={styles}>
          <BaseHeading 
            classes={styles.headingBox}
            btn={{ 
              text: data.heading.btn.text, 
              link: data.heading.btn.link 
            }}
            btnStyles={styles.btn}>
            <h2 className={styles.heading}>
              <span>{data.heading.spanOne}</span>
              <span>{data.heading.spanTwo}</span>
              <span>{data.heading.spanThree}</span>
            </h2>
            <p>{data.heading.body}</p>
          </BaseHeading>
          <Container classes={styles.cardBox}>
            <div className={styles.card}>
              <p>{data.card.lineOne}</p>
              <p>{data.card.lineTwo}</p>
              <p>{data.card.lineThree}</p>
            </div>
          </Container>
        </Box>
        <Box styles={styles} classes={'relative'}>
          <Image
            src={data.image.src} 
            alt={data.image.alt}
            layout={'fill'}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default Features;

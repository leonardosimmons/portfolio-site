
import React from 'react';
import Image from 'next/image';
import { IndexPageAboutSection } from '../../../../../utils/types';

import styles from './About.module.scss';

import Container from '../../../../../components/base/container';
import BaseGrid from '../../../../../components/base/grid';
import BaseHeading from '../../../../../components/heading';


type Props = {
  data: IndexPageAboutSection;
};


const SectionOne: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
  return (
    <Container wrapper id={'about'} styles={styles} classes={'relative noselect'}>
      <BaseGrid even grid={`${styles.contentGrid} ${ styles.contentGridOne}`} >
        <div className={styles.imageBox}>
          <Image 
            priority
            quality={100}
            className={styles.image}
            src={data.images[0].src}
            alt={data.images[1].alt}
            layout={'fill'}
          />
        </div>
        <BaseHeading classes={styles.headingBox}> 
          <h2 className={styles.heading}>
            <span>{data.heading.lineOne}</span>
            <span>{data.heading.lineTwo}</span>
            <span>{data.heading.lineThree}</span>
            <span>{data.heading.lineFour}</span>
          </h2>
        </BaseHeading>
        <div className={styles.emptySpace}/>
      </BaseGrid>
      <BaseGrid even grid={`${styles.contentGrid} ${styles.contentGridTwo}`}>
        <div className={styles.imageBox}>
          <Image
            priority
            quality={100} 
            className={styles.image}
            src={data.images[1].src}
            alt={data.images[1].alt}
            layout={'fill'}
          />
        </div>
        <div className={styles.textBox}>
          <p className={styles.text}>{data.body}</p>
        </div>
      </BaseGrid>
    </Container>
  );
};

export default SectionOne;

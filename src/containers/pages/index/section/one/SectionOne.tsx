
import React from 'react';
import Image from 'next/image';

import Container from '../../../../../components/base/container';
import BaseGrid from '../../../../../components/base/grid';

import styles from './SectionOne.module.scss';
import BaseHeading from '../../../../../components/heading/Heading';


type Props = {

};


const SectionOne: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <BaseGrid even grid={`${styles.contentGrid} ${ styles.contentGridOne}`} >
        <div className={styles.imageBox}>
          <Image 
            priority
            quality={100}
            className={styles.image}
            src={'/images/svg/undraw_server_cluster_jwwq.svg'}
            alt={'photo'}
            layout={'fill'}
          />
        </div>
        <BaseHeading classes={styles.headingBox}> 
          <h2 className={styles.heading}>
            <span>{'Who am I?'}</span>
            <span>{'A'}</span>
            <span>{'Full Stack'}</span>
            <span>{'Web Developer'}</span>
          </h2>
        </BaseHeading>
        <div className={styles.emptySpace}/>
      </BaseGrid>
      <BaseGrid even grid={`${styles.contentGrid} ${styles.contentGridTwo}`}>
        <div className={styles.imageBox}>
          <Image 
            className={styles.image}
            src={'/images/svg/undraw_web_developer_p3e5.svg'}
            alt={'photo'}
            layout={'fill'}
          />
        </div>
        <div className={styles.textBox}>
          <p className={styles.text}>
            {'Hello there! My name is Leonardo Simmons and I am a Full Stack Web Developer and Software Engineer. I specialize in building completely custom websites and applications.'}
          </p>
        </div>
      </BaseGrid>
    </Container>
  );
};

export default SectionOne;


import React from 'react';

import styles from './Services.module.scss';
import serviceCard from './ServiceCard.module.scss'
import cardOne from './CardOne.module.scss';
import cardTwo from './CardTwo.module.scss';
import cardThree from './CardThree.module.scss';

import Container from '../../../../../components/base/container';
import Heading from '../../../../../components/heading';
import FlipCard from '../../../../../components/flip-card';
import Button from '../../../../../components/base/button';

type Props = {

};

const cards = [
  cardOne,
  cardTwo,
  cardThree
];

const Serivces: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Heading classes={styles.headingBox}>
        <h2 className={styles.heading}>
          <span>{'Always here for you'}</span>
          <span>{'Available Services'}</span>
        </h2>
      </Heading>
      <Container classes={styles.flipCardContainer}>
      {
        cards.map((card, index) => (
          <FlipCard 
            key={index}
            card={serviceCard} 
            styles={cards[index]}
          />
        ))
      }
      </Container>
      <div className={`${styles.btnBox}`}>
        <Button 
          text={'A Closer Look'}
          link={'/'}
          styles={styles}
          classes={'btn-hoverConfig btn-activeFocus relative'}
        />
      </div>
    </Container>
  );
};

export default Serivces;

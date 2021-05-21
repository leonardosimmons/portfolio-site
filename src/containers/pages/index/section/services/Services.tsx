
import React from 'react';
import { FlipCard, IndexPageServicesSection } from '../../../../../utils/types';

import styles from './Services.module.scss';
import serviceCard from './ServiceCard.module.scss'
import cardOne from './CardOne.module.scss';
import cardTwo from './CardTwo.module.scss';
import cardThree from './CardThree.module.scss';

import Container from '../../../../../components/base/container';
import Heading from '../../../../../components/heading';
import ServiceCard from '../../../../../components/flip-card';
import Button from '../../../../../components/base/button';

type Props = {
  data: IndexPageServicesSection;
};

const cards = [
  cardOne,
  cardTwo,
  cardThree
];

const Serivces: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Heading classes={styles.headingBox}>
        <h2 className={styles.heading}>
          <span>{data.heading.spanOne}</span>
          <span>{data.heading.spanTwo}</span>
        </h2>
      </Heading>
      <Container classes={styles.flipCardContainer}>
      {
        data.cards.map((card: FlipCard, index: number) => (
          <ServiceCard 
            key={index}
            config={card}
            card={serviceCard} 
            styles={cards[index]}
          />
        ))
      }
      </Container>
      <div className={`${styles.btnBox}`}>
        <Button 
          text={data.btn.text}
          link={data.btn.link}
          styles={styles}
          classes={'btn-hoverConfig btn-activeFocus relative'}
        />
      </div>
    </Container>
  );
};

export default Serivces;

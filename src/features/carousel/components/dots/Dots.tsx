
import React from 'react';
import { Dot } from '../../../../utils/types';
import * as background from '../../config';

import styles from './Dots.module.scss';

type Props = {
  slides: any[];
  activeIndex: number;
  parent: string;
};

const CarouselDot: React.FunctionComponent<Dot> = ({ active, index, parent }): JSX.Element => {
  return (
    <span style={{
      background: `${
        parent === 'home' ? background.index(active, index) 
        : 
        background.base(active, index)
      }`}} 
    />
  );
};

const CarouselDots: React.FunctionComponent<Props> = ({ slides, activeIndex, parent }): JSX.Element => {
  return(
    <div className={ styles.dots }>
      {
        slides.map((slide, index) => (
          <CarouselDot 
            key={ slide }
            index={ activeIndex }
            active={ activeIndex === index }
            parent={ parent ? parent : ''} 
          />
        ))
      }
    </div>
  );
};

export default CarouselDots;
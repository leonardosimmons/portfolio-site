
import React from 'react';
import { FlipCard, Text } from '../../utils/types';

import baseStyles from './FlipCard.module.scss';


type Props = {
  card: any;
  config: FlipCard;
  styles?: any;
};


const BaseFlipCard: React.FunctionComponent<Props> = ({ config, card, styles }): JSX.Element => {
  return (
    <div className={`${baseStyles.flipCard} ${card && card.flipCard || ''} ${styles && styles.flipCard || ''}`}>
      <div className={`${baseStyles.side} ${baseStyles.front}`}>
        <div className={`${baseStyles.picture} ${card && card.picture || ''} ${styles && styles.picture || ''}`}>&nbsp;</div>
        <h4 className={`${card.heading} ${styles && styles.heading || ''}`}>
          <span>{config.heading}</span>
        </h4>
        <div className={baseStyles.details}>
          <ul>
            {
              config.details.map((detail: Text, index: number) => (
                <li>{detail.text}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className={`${baseStyles.side} ${baseStyles.back} ${card && card.back || ''} ${styles && styles.back || ''}`}>
        <div className={baseStyles.content}>
          <div className={`${card.priceBox} ${styles && styles.priceBox || ''}`}>
            <p className={`${card.priceText} ${styles && styles.priceText || ''}`}>{config.price.text}</p>
            <p className={`${card.priceValue} ${styles && styles.priceValue || ''}`}>{config.price.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseFlipCard;

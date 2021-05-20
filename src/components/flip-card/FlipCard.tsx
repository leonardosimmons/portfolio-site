
import React from 'react';

import baseStyles from './FlipCard.module.scss';


type Props = {
  card: any;
  styles?: any;
};


const FlipCard: React.FunctionComponent<Props> = ({ card, styles }): JSX.Element => {
  return (
    <div className={`${baseStyles.flipCard} ${card && card.flipCard || ''} ${styles && styles.flipCard || ''}`}>
      <div className={`${baseStyles.side} ${baseStyles.front}`}>
        <div className={`${baseStyles.picture} ${card && card.picture || ''} ${styles && styles.picture || ''}`}>&nbsp;</div>
        <h4 className={`${card.heading} ${styles && styles.heading || ''}`}>
          <span>{'Test Header'}</span>
        </h4>
        <div className={baseStyles.details}>
          <ul>
            <li>{'Test Line'}</li>
            <li>{'Test Line'}</li>
            <li>{'Test Line'}</li>
            <li>{'Test Line'}</li>
            <li>{'Test Line'}</li>
          </ul>
        </div>
      </div>
      <div className={`${baseStyles.side} ${baseStyles.back} ${card && card.back || ''} ${styles && styles.back || ''}`}>
        <div className={baseStyles.content}>
          <div className={`${card.priceBox} ${styles && styles.priceBox || ''}`}>
            <p className={`${card.priceText} ${styles && styles.priceText || ''}`}>{'ONLY'}</p>
            <p className={`${card.priceValue} ${styles && styles.priceValue || ''}`}>{'$250'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

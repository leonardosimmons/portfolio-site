
import React from 'react';
import { Header } from '../../../../utils/types';

import baseStyles from './Base.module.scss';
import headerOneStyles from './HeaderOne.module.scss';
import headerTwoStyles from './HeaderTwo.module.scss';
import headerThreeStyles from './HeaderThree.module.scss';

import Carousel from '../../../../features/carousel';
import BaseHeading from '../../../../components/heading';


type Props = {
  classes: string;
  headers: Header[];
  autoplayLength?: number;
  arrows?: boolean;
  dots?: boolean;
};

const styles = [
  {...headerOneStyles},
  {...headerTwoStyles},
  {...headerThreeStyles}
];


const IndexMainHeader: React.FunctionComponent<Props> = (
  {
    classes,
    headers,
    autoplayLength,
    arrows = true,
    dots = true,
  }
): JSX.Element => {
  return (
    <Carousel
      classes={classes}
      arrows={arrows}
      dots={dots}
      autoPlay={autoplayLength}
      arrowColor={'var(--grey-900)'}>
    {
      headers.map((header: Header, index: number) => (
        <div className={`${baseStyles.wrapper} ${styles[index].wrapper || ''}`} style={{ backgroundImage: `${'url(' + header.bgImage + ')'}`}} key={index}>
          <BaseHeading
            styles={baseStyles}
            classes={styles[index].box}
            btn={header.btn}>
            <h1 className={styles[index].heading}>
              <span>{header.textAbove}</span>
              <span>{header.heading}</span>
            </h1>
            <p className={styles[index].body}>{header.textBelow}</p>
          </BaseHeading>
        </div>
      ))
    }
    </Carousel>
  );
};

export default IndexMainHeader;

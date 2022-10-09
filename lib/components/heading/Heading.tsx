import React from 'react';
import Image from 'next/future/image';
import { BaseProps } from '../../types';

import base from './heading.module.scss';

export type HeadingProps = BaseProps & {
  heading: string;
  image: string;
  altHeading?: string;
  body?: string;
  caption?: string;
  captionAbove?: boolean;
  captionBelow?: boolean;
  custom?: boolean;
  imgSize?: {
    width: number;
    height: number;
  };
  main?: boolean;
  priority?: boolean;
};

const Heading: React.FunctionComponent<HeadingProps> = ({
  altHeading,
  image,
  imgSize = { width: 400, height: 400 },
  styles,
  body,
  caption,
  captionAbove,
  captionBelow,
  custom,
  heading,
  main,
  priority,
  children,
}): JSX.Element => {
  return (
    <header className={`${base.wrapper} ${styles && styles.wrapper}`}>
      <div className={`${base.text} ${styles && styles.text}`}>
        {custom ? (
          children
        ) : (
          <React.Fragment>
            {captionAbove && <h4>{caption}</h4>}
            {main && altHeading ? (
              <h1>
                <span>{heading}</span>
                <span>{altHeading}</span>
              </h1>
            ) : altHeading ? (
              <h2>
                <span>{heading}</span>
                <span>{altHeading}</span>
              </h2>
            ) : (
              <h2>
                <span>{heading}</span>
              </h2>
            )}
            {captionBelow && <h4>{caption}</h4>}
            <p>{body}</p>
          </React.Fragment>
        )}
      </div>
      <div className={`${base.image} ${styles && styles.image}`}>
        <Image
          priority={priority}
          src={image}
          alt={'heading image'}
          width={imgSize.width}
          height={imgSize.height}
        />
      </div>
    </header>
  );
};

export default Heading;

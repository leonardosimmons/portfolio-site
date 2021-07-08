
import React from 'react';
import Image from 'next/image';
import { Image as ImageType, Video } from '../../../utils/types';

import baseStyles from './BaseCard.module.scss';

import Container from '../container';
import Grid from '../grid';
import BaseVideo from '../video/Video';

type Props = {
  right?: boolean;
  left?: boolean;
  image?: boolean;
  video?: boolean;
  styles?: any;
} & ImageType & Video;


const BaseCard: React.FunctionComponent<Props> = (
  { 
    right, 
    left, 
    image, 
    video,
    src,
    alt,
    autoPlay,
    loop,
    muted,
    quality = 100,
    priority = false, 
    styles, 
    children 
  }
): JSX.Element => {
  return (
    <Container wrapper classes={`${styles && styles.wrapper || ''}`} styles={baseStyles}>
      <Grid even grid={`${baseStyles.grid || ''} ${styles ? styles.grid : ''}`}>
        {
          left &&
          <div className={`relative ${baseStyles.imageBox} ${styles && styles.imageBox || ''}`}>
          { 
            video && 
            <BaseVideo 
              src={src}
              muted={muted}
              loop={loop}
              autoPlay={autoPlay}
            />
          }
          {
            image &&
            <Image 
              src={src}
              alt={alt}
              quality={quality}
              priority={priority}
              layout={'fill'}
            />
          }
          </div>
        }
        <div className={`relative ${baseStyles.contentBox} ${styles && styles.contentBox || ''}`}>
          {children}
        </div>
        {
          right &&
          <div className={`relative ${baseStyles.imageBox} ${styles && styles.imageBox || ''}`}>
          { 
            video && 
            <BaseVideo 
              src={src}
              muted={muted}
              loop={loop}
              autoPlay={autoPlay}
            />
          }
          {
            image &&
            <Image 
              src={src}
              alt={alt}
              quality={quality}
              priority={priority}
              layout={'fill'}
            />
          }
          </div>
        }
      </Grid>
    </Container>
  );
};

export default BaseCard;

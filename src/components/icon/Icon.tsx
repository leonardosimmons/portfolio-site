
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '../base/box';

import { Icon, BaseOptions } from '../../utils/types';


type Props = Icon & BaseOptions;

const BaseIcon: React.FunctionComponent<Props> = (
  { 
    src, 
    width,
    height, 
    left, 
    right, 
    index,
    classes,
    column,
    link,
    loader,
    styles,
    priority = false,
    alt = 'icon',
    loading = 'lazy',
    quality = 100,
    layout = 'intrinsic',
    children 
  }
): JSX.Element => {
  return (
    <Box styles={ styles && styles } index={ index as number } key={ index }>
    {
    left && 
    <Link href={ link as string }>
      <div className={`${ column ? 'flex-col' : 'flex-row' } ${ styles && styles.iconBox || ''}`}>
        <Image 
          className={`${ styles && styles.icon } ${ classes || '' }`} 
          layout={ layout }
          quality={ quality }
          src={ src } 
          alt={ alt } 
          width={ width as number } 
          height={ height as number }
          priority={ priority }
          loading={ loading }
          loader={ loader } />
        { children }
      </div>
    </Link>
    }
    {
    !left && !right &&
    <Link href={ link as string }>
      <div className={`${ styles && styles.iconBox || '' }`}>
        <Image 
          className={`${ styles && styles.icon || '' } ${ classes || '' }`} 
          layout={ layout }
          quality={ quality }
          src={ src } 
          alt={ alt } 
          width={ width as number } 
          height={ height as number }
          priority={ priority }
          loading={ loading }
          loader={ loader } />
      </div>
    </Link>
    }
    {
    right && 
    <Link href={ link as string }>
      <div className={`${ column ? 'flex-col' : 'flex-row' } ${ styles && styles.iconBox || ''}`}>
        { children }
        <Image 
          className={`${ styles && styles.icon } ${ classes || '' }`} 
          layout={ layout }
          quality={ quality }
          src={ src } 
          alt={ alt } 
          width={ width as number } 
          height={ height as number }
          priority={ priority }
          loading={ loading }
          loader={ loader } />
      </div>
    </Link>
    }
    </Box>
  );
};

export default BaseIcon;

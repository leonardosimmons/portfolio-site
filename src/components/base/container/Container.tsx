import React from 'react';
import { BaseOptions } from '../../../utils/types';
import Video from '../video';

type Props = BaseOptions & {
  id?: string;
  wrapper?: boolean;
};

const BaseContainer: React.FunctionComponent<Props> = (
  { 
    id,
    parent, 
    styles, 
    classes,
    main, 
    video,
    bgImage,
    wrapper,
    children
  }
) => {
  return (
    <div id={id ? id : ''} className={`${ main ? styles && styles.mainContainer : wrapper ? styles.wrapper : styles && styles.container || '' } ${ classes || '' }`} 
    style={{ backgroundImage: `${ bgImage ? 'url(' + bgImage + ')' : '' }`}}
    >
      { video && <Video src={ video as string } /> }
      { children }
    </div>
  );
};

export default BaseContainer;

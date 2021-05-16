import { BaseOptions } from '../../../utils/types';
import Video from '../video';

type Props = BaseOptions;

const BaseBox: React.FunctionComponent<Props> = (
  { 
    parent, 
    classes, 
    index, 
    styles,
    bgImage,
    video, 
    children
  }
): JSX.Element => {
  return (
    <div className={`${ styles && styles.box } ${ classes ? classes : '' }`}
    style={{ backgroundImage: `${ bgImage ? 'url(' + bgImage + ')' : '' }`}}
    >
      { video && <Video src={ video } /> }
      { children }
    </div>
  );
};

export default BaseBox;

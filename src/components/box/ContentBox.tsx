import { BaseOptions } from '../../utils/types';
import Video from '../video/Video';

type Props = BaseOptions;

const ContentBox: React.FunctionComponent<Props> = (
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
    <div className={`${ styles && styles.contentBox } ${ classes ? classes : '' }`}
    style={{ backgroundImage: `${ bgImage ? 'url(' + bgImage + ')' : '' }`}}
    >
      { video && <Video src={ video } /> }
      { children }
    </div>
  );
};

export default ContentBox;

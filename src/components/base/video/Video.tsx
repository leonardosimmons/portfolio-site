import { Video } from "../../../utils/types";

type Props = Video;

const BaseVideo: React.FunctionComponent<Props> = (
  { 
    src, 
    autoPlay = true, 
    loop = true, 
    muted = true 
  }
): JSX.Element => {
  return (
    <video
      muted={muted}
      loop={loop}
      autoPlay={autoPlay}
      style={{
        height: '100%',
        width: '100%',
        maxWidth: '216rem',
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover',
        overflow: "hidden"
      }}
    >
      <source src={ src } />
      Your browser is not supported!
    </video>
  )
};

export default BaseVideo;
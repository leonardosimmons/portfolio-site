import React from 'react';
import { Text } from '../../utils/types';

type Props = {
  parent?: string;
  styles?: any;
} & Text

const TextBox: React.FunctionComponent<Props> = (
  { 
    parent,
    mainHeading,
    headingOne,
    headingTwo,
    subHeadOne,
    subHeadTwo, 
    textOne, 
    textTwo, 
    textThree, 
    textFour, 
    textFive,
    spanOne, 
    spanTwo, 
    spanThree, 
    spanFour, 
    spanFive,
    styles,
    mainHeadingClasses,
    headingOneClasses,
    headingTwoClasses,
    subHeadOneClasses,
    subHeadTwoClasses,
    textOneClasses,
    textTwoClasses,
    textThreeClasses,
    textFourClasses,
    textFiveClasses,
    spanOneClasses,
    spanTwoClasses,
    spanThreeClasses,
    spanFourClasses,
    spanFiveClasses
  }
): JSX.Element => {
  return (
    <React.Fragment>
      { mainHeading && <h1 className={`${ styles && styles.mainHeading } ${ mainHeadingClasses || '' }`}>{ mainHeading }</h1> }
      { headingOne && <h2 className={`${ styles && styles.headingOne } ${ headingOneClasses || '' }`}>{ headingOne }</h2> }
      { headingTwo && <h2 className={`${ styles && styles.headingTwo } ${ headingTwoClasses || '' }`}>{ headingTwo }</h2> }
      { subHeadOne && <h3 className={`${ styles && styles.subHeadingOne } ${ subHeadOneClasses || '' }`}>{ subHeadOne }</h3> }
      { subHeadTwo && <h3 className={`${ styles && styles.subHeadingTwo } ${ subHeadTwoClasses || '' }`}>{ subHeadTwo }</h3> }
      { textOne && <p className={`${ styles && styles.textOne } ${ textOneClasses || '' }`}>{ textOne }</p> }
      { textTwo && <p className={`${ styles && styles.textTwo } ${ textTwoClasses || '' }`}>{ textTwo }</p> }
      { textThree && <p className={`${ styles && styles.textThree } ${ textThreeClasses || '' }`}>{ textThree }</p> }
      { textFour && <p className={`${ styles && styles.textFour } ${ textFourClasses || '' }`}>{ textFour }</p> }
      { textFive && <p className={`${ styles && styles.textFive } ${ textFiveClasses || '' }`}>{ textFive }</p> }
      { spanOne && <span className={`${ styles && styles.spanOne } ${ spanOneClasses || '' }`}>{ spanOne }</span> }
      { spanTwo && <span className={`${ styles && styles.spanTwo } ${ spanTwoClasses || '' }`}>{ spanTwo }</span> }
      { spanThree && <span className={`${ styles && styles.spanThree } ${ spanThreeClasses || '' }`}>{ spanThree }</span> }
      { spanFour && <span className={`${ styles && styles.spanFour } ${ spanFourClasses || '' }`}>{ spanFour }</span> }
      { spanFive && <span className={`${ styles && styles.spanFive } ${ spanFiveClasses || '' }`}>{ spanFive }</span> }
    </React.Fragment>
  );                                          
};

export default TextBox;

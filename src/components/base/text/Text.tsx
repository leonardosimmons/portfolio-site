import React from 'react';
import { Text } from '../../../utils/types';

type Props = {
  parent?: string;
  styles?: any;
} & Text

const BaseText: React.FunctionComponent<Props> = (
  { 
    parent,
    mainHeading,
    headingOne,
    headingTwo,
    subHeadOne,
    subHeadTwo, 
    lineOne, 
    lineTwo, 
    lineThree, 
    lineFour, 
    lineFive,
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
    lineOneClasses,
    lineTwoClasses,
    lineThreeClasses,
    lineFourClasses,
    lineFiveClasses,
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
      { lineOne && <p className={`${ styles && styles.lineOne } ${ lineOneClasses || '' }`}>{ lineOne }</p> }
      { lineTwo && <p className={`${ styles && styles.lineTwo } ${ lineTwoClasses || '' }`}>{ lineTwo }</p> }
      { lineThree && <p className={`${ styles && styles.lineThree } ${ lineThreeClasses || '' }`}>{ lineThree }</p> }
      { lineFour && <p className={`${ styles && styles.lineFour } ${ lineFourClasses || '' }`}>{ lineFour }</p> }
      { lineFive && <p className={`${ styles && styles.lineFive } ${ lineFiveClasses || '' }`}>{ lineFive }</p> }
      { spanOne && <span className={`${ styles && styles.spanOne } ${ spanOneClasses || '' }`}>{ spanOne }</span> }
      { spanTwo && <span className={`${ styles && styles.spanTwo } ${ spanTwoClasses || '' }`}>{ spanTwo }</span> }
      { spanThree && <span className={`${ styles && styles.spanThree } ${ spanThreeClasses || '' }`}>{ spanThree }</span> }
      { spanFour && <span className={`${ styles && styles.spanFour } ${ spanFourClasses || '' }`}>{ spanFour }</span> }
      { spanFive && <span className={`${ styles && styles.spanFive } ${ spanFiveClasses || '' }`}>{ spanFive }</span> }
    </React.Fragment>
  );                                          
};

export default BaseText;

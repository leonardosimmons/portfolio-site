
import Link from 'next/link';
import React from 'react';
import { NamedLink, Styles } from '../../utils/types';


type Props = NamedLink & Styles;


const namedLink: React.FunctionComponent<Props> = ({ name, link, styles, classes }): JSX.Element => {
  return (
    <Link href={link}>
      <p className={`${ styles && styles.namedLink || ''} ${ classes ? classes : '' }`}>
        {name}
      </p> 
    </Link>
  )
};

export default namedLink;
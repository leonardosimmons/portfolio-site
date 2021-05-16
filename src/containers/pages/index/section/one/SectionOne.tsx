
import React from 'react';
import Container from '../../../../../components/base/container';
import BaseGrid from '../../../../../components/base/grid';

import styles from './SectionOne.module.scss';


type Props = {

};


const SectionOne: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <BaseGrid even grid={styles.grid}>
        
        <div className={styles.testTwo} />
      </BaseGrid>
    </Container>
  );
};

export default SectionOne;
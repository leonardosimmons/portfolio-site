
import React from 'react';
import { IndexPageMissionStatement } from '../../../../../utils/types';

import styles from './MissionStatement.module.scss';

import Container from '../../../../../components/base/container';
import Box from '../../../../../components/base/box';
import BaseGrid from '../../../../../components/base/grid';


type Props = {
  data: IndexPageMissionStatement
};


const MissionStatement: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Box styles={styles}>
        <BaseGrid even grid={styles.grid}>
          <div className={styles.headingBox}>
            <h2>{data.heading}</h2>
          </div>
          <div className={styles.textBox}>
            <p>{data.text.blockOne}</p>
            <p>{data.text.blockTwo}</p>
          </div>
        </BaseGrid>
      </Box>
    </Container>
  );
};

export default MissionStatement;

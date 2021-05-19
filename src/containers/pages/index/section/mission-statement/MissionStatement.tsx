
import React from 'react';

import styles from './MissionStatement.module.scss';

import Container from '../../../../../components/base/container';
import Box from '../../../../../components/base/box';
import BaseGrid from '../../../../../components/base/grid';


type Props = {

};


const MissionStatement: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles} classes={'relative noselect'}>
      <Box styles={styles}>
        <BaseGrid even grid={styles.grid}>
          <div className={styles.headingBox}>
            <h2>{'Mission Statement'}</h2>
          </div>
          <div className={styles.textBox}>
            <p>
              {'Meet goals through not only concise and scalable code but productive communication to ensure the end product is exactly as envisioned.'}
            </p>
            <p>
              {'Contribute to open source and other community projects to not only the benefit of the community, but to also gain new knowledge and experience to only enhance my ability as a developer in the ever changing industry.'}
            </p>
          </div>
        </BaseGrid>
      </Box>
    </Container>
  );
};

export default MissionStatement;

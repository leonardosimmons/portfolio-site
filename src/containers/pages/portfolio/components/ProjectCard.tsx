
import React from 'react';

import styles from './ProjectCard.module.scss';

import Card from '../../../../components/base/card';

type Props = {

};


const ProjectCard: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Card
      left
      image
      src={'/images/svg/undraw_Invite_re_rrcp.svg'}
      alt={'photo'}
      styles={styles}
    >
      <div className={styles.textBox}>
        <h2>
          <span>{'Test Text'}</span>
        </h2>
        <p>{'Test Body Text'}</p>
      </div>
    </Card>
  );
};

export default ProjectCard
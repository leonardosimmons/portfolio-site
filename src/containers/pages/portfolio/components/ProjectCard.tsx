
import React from 'react';
import { ProjectToken } from '../../../../utils/types';

import styles from './ProjectCard.module.scss';

import Card from '../../../../components/base/card';
import BaseBox from '../../../../components/base/box';

type Props = {
  project: ProjectToken;
};


const ProjectCard: React.FunctionComponent<Props> = ({ project }): JSX.Element => {
  return (
    <Card
      left
      image
      priority
      quality={100}
      src={project.src}
      alt={'photo'}
      styles={styles}
    >
      <BaseBox classes={styles.info}>
        <div className={styles.textBox}>
          <h2>
            <span>{project.title}</span>
            <span>{` - ${project.type}`}</span>
          </h2>
          <p className={styles.textDesktop}>
            <span>{project.text.lineOne}</span>
            <span>{project.text.lineTwo}</span>
            <span>{project.text.lineThree}</span>
          </p>
          <p className={styles.textMobile}>{project.mobileText}</p>
        </div>
        <div className={styles.links}>
          <a href={project.link.demo}>{'Demo'}</a>
          {project.link.client && 
            <a href={project.link.client}>{'Client GitHub'}</a>
          }
          {project.link.server && 
            <a href={project.link.server}>{'Server GitHub'}</a>
          }
        </div>
      </BaseBox>
    </Card>
  );
};

export default ProjectCard


import React from 'react';

import styles from './Fallback.module.scss';

import LoadSpinner from '../../../components/loader/spinner/LoadSpinner';

const fallbackPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <LoadSpinner />
      <p>One moment...</p>
    </div>
  );
};


export default fallbackPage;
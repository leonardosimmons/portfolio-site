
import React from 'react';
import ContentBox from '../../../components/box/ContentBox';
import Grid from '../../../components/grid/Grid';
import Input from '../../../components/input/Input';
import Logo from '../../../components/logo/Logo';

import styles from './Mobile.module.scss';
import tabStyles from './Tabs.module.scss';


type Props = {

};


const mobileNavbar: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <div className={`${styles.wrapper} noselect`}>
      <Grid even grid={styles.grid}>
        <ContentBox styles={styles} />
        <ContentBox styles={styles}>
          <Logo 
            link={'/'}
            src={'/images/png/logo.png'}
            alt={'logo'}
            width={'60'}
            height={'60'}
          />
        </ContentBox>
        <ContentBox styles={styles}>
          <Input 
            toggle
            styles={tabStyles}
            parent={'mobile-nav'}
          />
        </ContentBox>
      </Grid>
    </div>
  );
};

export default mobileNavbar;
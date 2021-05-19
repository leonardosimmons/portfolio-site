
import React from 'react';
import { cpnt } from '../../../utils/keys';
import { MobileNavbarConfiguration, NamedLink } from '../../../utils/types';

import styles from './Mobile.module.scss';
import tabStyles from './Tabs.module.scss';
import menuStyles from './Menu.module.scss';

import Box from '../../../components/base/box';
import Container from '../../../components/base/container';
import Grid from '../../../components/base/grid';
import Input from '../../../components/base/input';
import Logo from '../../../components/logo';
import Button from '../../../components/base/button';
import MenuLink from '../../../components/link/NamedLink';


type Props = {
  data: MobileNavbarConfiguration;
};


const mobileNavbar: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
  return (
    <div className={`${styles.wrapper} noselect`}>
      <Grid even grid={styles.grid}>
        <Box styles={styles} />
        <Box styles={styles}>
          <Logo 
            link={data.logo.link}
            src={data.logo.src}
            alt={data.logo.alt}
            width={data.logo.width as string}
            height={data.logo.height as string}
          />
        </Box>
        <Box styles={styles}>
          <Input 
            toggle
            styles={tabStyles}
            parent={cpnt.MOBILE_NAVBAR}
          />
          <div className={ tabStyles.background }>
            <Container wrapper styles={menuStyles}>
              <Container styles={menuStyles}>
                <Button 
                  toggle
                  text={'x'}
                  styles={menuStyles}
                  toggleFor={cpnt.MOBILE_NAVBAR}/>
                <div className={menuStyles.tabs}>
                {
                  data.tabs.map((tab: NamedLink, index: number) => (
                    <MenuLink
                      key={index}
                      name={tab.name} 
                      link={tab.link}
                    />
                  ))
                }
                </div>
              </Container>
            </Container>
          </div>
        </Box>
      </Grid>
    </div>
  );
};

export default mobileNavbar;

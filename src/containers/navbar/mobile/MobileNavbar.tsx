
import React from 'react';
import { cpnt } from '../../../utils/keys';
import { MobileNavbarConfiguration, NamedLink } from '../../../utils/types';

import styles from './Mobile.module.scss';
import tabStyles from './Tabs.module.scss';
import menuStyles from './Menu.module.scss';

import ContentBox from '../../../components/box';
import Container from '../../../components/container';
import Grid from '../../../components/grid';
import Input from '../../../components/input';
import Logo from '../../../components/logo';
import Button from '../../../components/button';
import MenuLink from '../../../components/link/NamedLink';


type Props = {
  config: MobileNavbarConfiguration;
};


const mobileNavbar: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <div className={`${styles.wrapper} noselect`}>
      <Grid even grid={styles.grid}>
        <ContentBox styles={styles} />
        <ContentBox styles={styles}>
          <Logo 
            link={config.logo.link}
            src={config.logo.src}
            alt={config.logo.alt}
            width={config.logo.width as string}
            height={config.logo.height as string}
          />
        </ContentBox>
        <ContentBox styles={styles}>
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
                  config.tabs.map((tab: NamedLink, index: number) => (
                    <MenuLink
                      key={index}
                      styles={styles} 
                      name={tab.name} 
                      link={tab.link}
                    />
                  ))
                }
                </div>
              </Container>
            </Container>
          </div>
        </ContentBox>
      </Grid>
    </div>
  );
};

export default mobileNavbar;

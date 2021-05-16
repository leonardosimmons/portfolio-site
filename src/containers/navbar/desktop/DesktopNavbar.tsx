
import { DesktopNavbarConfiguration, NavbarMenuTab } from '../../../utils/types';

import styles from './Navbar.module.scss';
import tabStyles from './MenuTabs.module.scss';

import Container from '../../../components/container'
import Box from '../../../components/base/box';
import Grid from '../../../components/grid';
import Icon from '../../../components/icon';
import Logo from '../../../components/logo/Logo';


type Props = {
  config: DesktopNavbarConfiguration;
};


const DesktopNavbar: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Container main styles={styles}>
        <Grid even grid={styles.grid}>
          <div id={'desktop-logo'} className={styles.box}>
            <Logo 
              link={config.logo.link}
              src={config.logo.src}
              alt={config.logo.alt}
              width={config.logo.width as string}
              height={config.logo.height as string}
              styles={styles}
            />
          </div>
          <Box styles={styles}>
            <Container styles={styles}>
            {
              config.tabs.map((tab: NavbarMenuTab, index: number) => (
                <div className={tabStyles.menuTab} key={index}>
                  <Icon
                    right
                    column
                    styles={tabStyles}
                    link={tab.link}
                    src={tab.src}
                    alt={tab.alt}
                    width={tab.width}
                    height={tab.height}>
                    <a className={ tabStyles.text }>
                      { tab.name }
                    </a>
                  </Icon>
                </div>
              ))
            }
            </Container>
          </Box>
        </Grid>
      </Container> 
    </div>
  );
};

export default DesktopNavbar;

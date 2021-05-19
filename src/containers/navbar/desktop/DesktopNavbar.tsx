
import { DesktopNavbarConfiguration, NavbarMenuTab } from '../../../utils/types';

import styles from './Navbar.module.scss';
import tabStyles from './MenuTabs.module.scss';

import Container from '../../../components/base/container'
import Box from '../../../components/base/box';
import Grid from '../../../components/base/grid';
import Icon from '../../../components/icon';
import Logo from '../../../components/logo';


type Props = {
  data: DesktopNavbarConfiguration;
};


const DesktopNavbar: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Container main styles={styles}>
        <Grid even grid={styles.grid}>
          <div id={'desktop-logo'} className={styles.box}>
            <Logo 
              link={data.logo.link}
              src={data.logo.src}
              alt={data.logo.alt}
              width={data.logo.width as string}
              height={data.logo.height as string}
              styles={styles}
            />
          </div>
          <Box styles={styles}>
            <Container styles={styles}>
            {
              data.tabs.map((tab: NavbarMenuTab, index: number) => (
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


import { DesktopNavbarConfiguration, NavbarMenuTab } from '../../../utils/types';

import styles from './Navbar.module.scss';
import tabStyles from './MenuTabs.module.scss';

import Container from '../../../components/container'
import ContentBox from '../../../components/box';
import Grid from '../../../components/grid';
import Icon from '../../../components/icon';


type Props = {
  config: DesktopNavbarConfiguration;
};


const DesktopNavbar: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <Container main styles={styles}>
        <Grid even grid={styles.grid}>
          <ContentBox styles={styles}>
            <Icon 
              link={config.logo.link}
              src={config.logo.src}
              alt={config.logo.alt}
              width={config.logo.width}
              height={config.logo.height}
              styles={styles}/>
          </ContentBox>
          <ContentBox styles={styles}>
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
          </ContentBox>
        </Grid>
      </Container> 
    </Container>
  );
};

export default DesktopNavbar;

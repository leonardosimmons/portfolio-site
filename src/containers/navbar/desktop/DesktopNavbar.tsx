
import { DesktopNavbarConfiguration, NamedLink } from '../../../utils/types';

import styles from './styles/Navbar.module.scss';

import Container from '../../../components/container'
import ContentBox from '../../../components/box';
import Grid from '../../../components/grid';
import Icon from '../../../components/icon/Icon';
import NavbarNamedLink from '../../../components/link/NamedLink';


type Props = {
  config: DesktopNavbarConfiguration
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
                config.tabs.map((tab: NamedLink, index: number) => (
                  <NavbarNamedLink
                    key={index} 
                    name={tab.name}
                    link={tab.link}
                    styles={styles}
                  />
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


import styles from './styles/Navbar.module.scss';

import Container from '../../../components/container'
import ContentBox from '../../../components/box';
import Grid from '../../../components/grid';
import Icon from '../../../components/icon/Icon';


type Props = {

};

const DesktopNavbar: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <Container main styles={styles}>
        <Grid even grid={styles.grid}>
          <ContentBox styles={styles}>
            <Icon 
              link={'/'}
              src={'/images/png/logo.png'}
              alt={'logo'}
              width={65}
              height={65}
              styles={styles}/>
          </ContentBox>
          <ContentBox styles={styles}>
            <Container styles={styles}>

            </Container>
          </ContentBox>
        </Grid>
      </Container> 
    </Container>
  );
};

export default DesktopNavbar;

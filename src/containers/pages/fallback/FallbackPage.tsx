
import React from 'react';
import { Footer, NavbarConfiguration } from '../../../utils/types';

import styles from './Fallback.module.scss';

import Layout from '../../layout';
import FooterSection from '../../footer';
import Container from '../../../components/base/container';
import LoadSpinner from '../../../components/loader/spinner';

const FallbackPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <Container wrapper styles={styles}>
      <LoadSpinner />
      <p>{'One moment...'}</p>
    </Container>
  );
};


export default FallbackPage;

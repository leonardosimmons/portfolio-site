
import styles from './LoadSpin.module.scss';

const LoadSpinner: React.FunctionComponent = ():JSX.Element => (
  <div className={styles.spinner}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default LoadSpinner;
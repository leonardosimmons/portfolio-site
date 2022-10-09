import '../styles/styles.scss';
import { AppProps } from 'next/app';
import { AppStore } from '../app/store';
import { Provider } from 'react-redux';

export default function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = AppStore.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

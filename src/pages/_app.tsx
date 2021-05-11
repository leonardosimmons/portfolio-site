import '../styles';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};

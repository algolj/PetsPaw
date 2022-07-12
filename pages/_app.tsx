import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../store';

import '../styles/reset-style.scss';
import '../styles/globals.scss';
import '../styles/vars.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

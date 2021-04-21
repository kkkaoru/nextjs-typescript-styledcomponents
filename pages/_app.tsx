import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { BaseContext } from 'next/dist/next-server/lib/utils';
import { initializeGTM } from '@/utils/gtm';
import 'sanitize.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): BaseContext {
  useEffect(() => {
    initializeGTM();
  }, []);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

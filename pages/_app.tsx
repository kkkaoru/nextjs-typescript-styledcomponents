import { AppProps } from 'next/app';
import { BaseContext } from 'next/dist/next-server/lib/utils';
import 'sanitize.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): BaseContext {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

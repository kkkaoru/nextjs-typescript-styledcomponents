import { AppProps } from 'next/app';
import { BaseContext } from 'next/dist/next-server/lib/utils';
import 'sanitize.css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): BaseContext {
  return <Component {...pageProps} />;
}

import Head from 'next/head';

type Props = {
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    {children}
  </>
);

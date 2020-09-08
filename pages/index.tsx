import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: #333;
  font-size: 2.4rem;
`;

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title>HELLO WORLD!</Title>
      </main>
    </div>
  );
}

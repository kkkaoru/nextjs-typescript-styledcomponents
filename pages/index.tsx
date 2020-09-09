import styled from 'styled-components';
import { DefaultLayout } from '@/components/layouts/default';
import { md, xs } from '@/utils/media-queries';

const Title = styled.h1`
  color: #333;
  font-size: 2.4rem;
  @media ${xs} {
    color: red;
  }
  @media ${md} {
    font-size: 3.2rem;
  }
`;

export default function Home(): JSX.Element {
  return (
    <DefaultLayout>
      <main>
        <Title>HELLO WORLD!</Title>
      </main>
    </DefaultLayout>
  );
}

import styled from 'styled-components';
import { DefaultLayout } from '@/components/layouts/default';
import { md, xs } from '@/utils/media-queries';
import TwitterSvg from '@/public/twitter.svg';

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

const TwitterIcon = styled(TwitterSvg)`
  width: 3.2rem;
  height: 3.2rem;
`;

const Main = styled.main`
  display: flex;
  align-items: center;
`;

export default function Home(): JSX.Element {
  return (
    <DefaultLayout>
      <Main>
        <TwitterIcon />
        <Title>HELLO WORLD!</Title>
      </Main>
    </DefaultLayout>
  );
}

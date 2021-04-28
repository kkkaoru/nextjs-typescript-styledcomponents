import styled from 'styled-components';
import { DefaultLayout } from '@/components/layouts/default';
import TwitterSvg from '@/public/twitter.svg';
import { Title } from '@/components/atoms/title';

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
        <Title text="HELLO WORLD!" />
      </Main>
    </DefaultLayout>
  );
}

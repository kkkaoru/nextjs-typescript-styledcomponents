import styled from 'styled-components';
import { md, xs } from '@/utils/media-queries';

export const TitleH1 = styled.h1`
  color: #333;
  font-size: 2.4rem;
  @media ${xs} {
    color: red;
  }
  @media ${md} {
    font-size: 3.2rem;
  }
`;

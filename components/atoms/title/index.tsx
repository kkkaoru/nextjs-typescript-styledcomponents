import { TitleH1 } from './styled';

type Props = {
  text: string;
};

export function Title({ text }: Props): JSX.Element {
  return <TitleH1>{text}</TitleH1>;
}

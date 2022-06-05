import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode | string;
};

export const Heading = (props: HeadingProps) => {
  return <Styled.Title>{props.children}</Styled.Title>;
};

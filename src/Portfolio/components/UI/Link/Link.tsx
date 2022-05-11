import {AnchorHTMLAttributes, PropsWithChildren} from 'react';
import {StyledLink} from './styled';

export default function Link({
  children,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return <StyledLink {...props}>{children}</StyledLink>;
}

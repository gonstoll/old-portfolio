import {AnchorHTMLAttributes, PropsWithChildren} from 'react';
import {StyledLink} from './styled';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function Link({children, ...props}: PropsWithChildren<Props>) {
  return <StyledLink {...props}>{children}</StyledLink>;
}

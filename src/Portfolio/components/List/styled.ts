import {mediaQuery} from '@southstudio/south/styles/mediaQueries';
import styled from 'styled-components';

interface ListProps {
  inline?: boolean;
}

export const StyledList = styled.div<ListProps>`
  ${props =>
    props.inline &&
    `
      display: flex;
      ${mediaQuery('md', 'align-items: center;')}
    `}
`;

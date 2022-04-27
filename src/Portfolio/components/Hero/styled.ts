import styled from 'styled-components';
import Text from '@southstudio/south/content/Text';
import {mediaQuery} from '@southstudio/south/styles/mediaQueries';

export const StyledText = styled(Text)`
  font-size: 3.5rem;
  margin: 5rem 0;
  ${mediaQuery('md', 'font-size: 4rem;')}
`;

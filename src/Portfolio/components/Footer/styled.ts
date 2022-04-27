import styled from 'styled-components';
import GridCell from '@southstudio/south/layout/GridCell';
import Grid from '@southstudio/south/layout/Grid';
import {mediaQuery} from '@southstudio/south/styles/mediaQueries';

export const StyledGrid = styled(Grid)`
  margin-top: 2rem;
`;

export const StyledGridCell = styled(GridCell)`
  display: flex;
  ${mediaQuery(
    'md',
    `
      align-items: end;
      justify-content: flex-end;
    `
  )}
`;

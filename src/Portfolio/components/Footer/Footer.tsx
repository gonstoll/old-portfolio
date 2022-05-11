import Text from '@southstudio/south/content/Text';
import GridCell from '@southstudio/south/layout/GridCell';
import List from '../List';
import Link from '../UI/Link';
import {socialLinks} from './definitions';
import {StyledGrid, StyledGridCell} from './styled';

export default function Footer() {
  return (
    <StyledGrid>
      <GridCell xs={12} md={6}>
        <Text element="h3" size="title3" noMargin bold>
          Interested in working together?
        </Text>
        <Text element="h3" size="title3" noMargin bold>
          ↳ Contact me <Link href="mailto:stollgonzalo@gmail.com" aria-label="Contact me here">here</Link>
        </Text>
      </GridCell>
      <StyledGridCell xs={12} md={6}>
        <List items={socialLinks} inline />
      </StyledGridCell>
    </StyledGrid>
  );
}

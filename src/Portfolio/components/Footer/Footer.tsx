import Text from '@southstudio/south/content/Text';
import GridCell from '@southstudio/south/layout/GridCell';
import Link from '../UI/Link';
import {socialLinks} from './definitions';
import {StyledGrid, StyledGridCell} from './styled';

export default function Footer() {
  return (
    <StyledGrid>
      <GridCell xs={12} md={6}>
        <Text element="h2" size="title3" noMargin>
          Interested in working together?
        </Text>
        <Text element="h2" size="title3" noMargin>
          ↳ Contact me <Link href="mailto:stollgonzalo@gmail.com">here</Link>
        </Text>
      </GridCell>
      <StyledGridCell xs={12} md={6}>
        {socialLinks.map(s => (
          <Link key={s.media} href={s.link} download={s.download}>
            {s.media}
          </Link>
        ))}
      </StyledGridCell>
    </StyledGrid>
  );
}

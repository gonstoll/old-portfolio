import Text from '@southstudio/south/content/Text';
import Grid from '@southstudio/south/layout/Grid';
import GridCell from '@southstudio/south/layout/GridCell';
import Toggle from '../Toggle';

export default function Header() {
  return (
    <Grid>
      <GridCell>
        <Text noMargin>Gonzalo Stoll</Text>
      </GridCell>
      <GridCell>
        <Toggle />
      </GridCell>
    </Grid>
  );
}

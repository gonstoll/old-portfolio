import {DefaultTheme as SouthTheme} from '@southstudio/south/theme';
import 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme extends SouthTheme {
    backgroundColor: string;
    color: string;
  }
}

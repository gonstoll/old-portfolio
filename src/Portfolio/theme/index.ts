import {DefaultTheme} from 'styled-components';
import {defaultTheme} from '@southstudio/south/theme';
import {Theme} from '../entities';

const black500 = '#1f1f1f';
const white500 = '#fdfdfd';

export const themes = new Map<Theme, DefaultTheme>([
  [
    'light',
    {
      ...defaultTheme,
      backgroundColor: white500,
      color: black500,
    },
  ],
  [
    'dark',
    {
      ...defaultTheme,
      backgroundColor: black500,
      color: white500,
    },
  ],
]);

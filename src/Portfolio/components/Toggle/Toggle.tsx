import {useThemeContext} from '../../context';
import {StyledToggle} from './styled';

interface Props {
  align?: 'left' | 'right' | 'center';
}

export default function Toggle({align = 'left'}: Props) {
  const {theme, updateTheme} = useThemeContext();

  const themeOpposite = theme === 'light' ? 'dark' : 'light';

  return (
    <StyledToggle
      themeColor={theme}
      align={align}
      onClick={() => updateTheme(themeOpposite)}
      type="button"
      role="switch"
      aria-label="Light theme"
      aria-checked={theme === 'light'}
    />
  );
}

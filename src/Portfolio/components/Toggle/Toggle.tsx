import {useThemeContext} from '../../context';
import {StyledToggle} from './styled';

export default function Toggle() {
  const {theme, updateTheme} = useThemeContext();

  return (
    <StyledToggle
      themeColor={theme}
      onClick={() => updateTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
}

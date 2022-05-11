import {useLayoutEffect} from 'react';
import Container from '@southstudio/south/layout/Container';
import {useThemeContext} from './context';
import Header from './components/Header';
import Hero from './components/Hero';
import List from './components/List';
import Footer from './components/Footer';

export default function Portfolio() {
  const {updateTheme} = useThemeContext();

  useLayoutEffect(() => {
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const theme = e.matches ? 'dark' : 'light';
      updateTheme(theme);
    };

    const isDarkTheme = matchMedia('(prefers-color-scheme: dark)');

    isDarkTheme.addEventListener('change', handleThemeChange);

    if (isDarkTheme.matches) {
      updateTheme('dark');
    } else {
      updateTheme('light');
    }

    return () => {
      isDarkTheme.removeEventListener('change', handleThemeChange);
    };
  }, [updateTheme]);

  return (
    <Container>
      <Header />
      <Hero />
      <List
        title="Skills"
        items={[
          {type: 'text', label: 'React'},
          {type: 'text', label: 'TypeScript'},
          {type: 'text', label: 'React Query'},
          {type: 'text', label: 'Jest'},
          {type: 'text', label: 'HTML'},
          {type: 'text', label: 'CSS'},
          {type: 'text', label: 'Accessibility'},
        ]}
      />
      <Footer />
    </Container>
  );
}

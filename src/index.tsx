import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import Fonts from '@southstudio/south/global/Fonts';
import CSSReset from '@southstudio/south/global/CSSReset';
import {defaultTheme} from '@southstudio/south/theme';
import reportWebVitals from './reportWebVitals';
import Portfolio from './Portfolio';
import {ThemeContextProvider, useThemeContext} from './Portfolio/context';
import {themes} from './Portfolio/theme';

const GlobalStyles = createGlobalStyle`
  body, html {
    height: 100vh;
    margin: 0;
  }

  body {
    padding: 1rem;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    transition: background-color 0.3s linear;
  }

  #root {
    height: 100%;
  }
`;

function AppProvider() {
  const {theme} = useThemeContext();

  return (
    <ThemeProvider theme={themes.get(theme) || defaultTheme}>
      <GlobalStyles />
      <Fonts />
      <CSSReset />
      <Portfolio />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeContextProvider>
      <AppProvider />
    </ThemeContextProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

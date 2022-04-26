import { ThemeProvider } from "styled-components";

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Home } from '../Home';
import { Container } from './styles';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

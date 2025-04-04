import { ThemeProvider } from 'styled-components';
import Container from './components/styles/Container.styled';
import GlobalStyles from './components/styles/GlobalStyles';
import Header from './components/Header';
import { theme } from './constants';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      {/* <Container>Hello</Container> */}
    </ThemeProvider>
  );
}

export default App;

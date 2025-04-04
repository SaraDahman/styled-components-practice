import { ThemeProvider } from 'styled-components';
import Container from './components/styles/Container.styled';
import GlobalStyles from './components/styles/GlobalStyles';
import Header from './components/Header';
import { theme } from './constants';
import { content } from './constants';
import Card from './components/Card';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((e) => (
          <Card item={e} key={e.id} />
        ))}
      </Container>
    </ThemeProvider>
  );
}

export default App;

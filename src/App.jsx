import { ThemeProvider } from 'styled-components';
import Container from './components/styles/Container.styled';
import GlobalStyles from './components/styles/GlobalStyles';
import Header from './components/Header';
import { theme } from './constants';
import { content } from './constants';
import Card from './components/Card';
import { BottomCard } from './components/styles/Card.styles';
import { Button } from './components/styles/Button.styles';
import { Footer } from './components/styles/Footer.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((e) => (
          <Card item={e} key={e.id} />
        ))}
        <BottomCard>
          <h2> Ready To Build Your Community?</h2>

          <Button $bg='#ff52bf' color='#fff'>
            Get Started For Free
          </Button>
        </BottomCard>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

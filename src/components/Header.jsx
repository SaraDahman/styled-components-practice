import { StyledHeader, Nav } from './styles/Header.styles';
import { Image } from './styles/Image.styles';
import { Button } from './styles/Button.styles';
import { Flex } from './styles/Flex.styles';

function Header() {
  return (
    <StyledHeader $bg='bg-hero-desktop.svg'>
      <Nav>
        <Image src='logo.svg' alt='huddle logo' width='10%' />
        <Button $bg='#fff'>Try It Free</Button>
      </Nav>
      <Flex>
        <div>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion
          </p>
          <Button $bg='#ff52bf' color='#fff'>
            Get Started For Free
          </Button>
        </div>
        <Image
          src='illustration-mockups.svg'
          width='50%'
          className='header-image'
        />
      </Flex>
    </StyledHeader>
  );
}

export default Header;

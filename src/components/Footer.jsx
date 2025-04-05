import { StyledFooter } from './styles/Footer.styles';
import { Image } from './styles/Image.styles';
import { Flex } from './styles/Flex.styles';
import SocialMedia from './SocialMedia';

function Footer() {
  return (
    <StyledFooter>
      <Image src='/public/logo.svg' alt='Huddle Logo' width='170px' />
      <Flex $footer>
        <ul className='contact-info'>
          <li>
            <Image src='/icon-location.svg' alt='location icon' width='20px' />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur rem officiis ullam tempora sunt. Necessitatibus
              sapiente ipsam numquam quo eaque provident nesciunt.
            </span>
          </li>
          <li>
            <Image src='/icon-phone.svg' alt='phone icon' width='20px' />
            <span>+-543-123-4567</span>
          </li>
          <li>
            <Image src='/icon-email.svg' alt='location icon' width='20px' />
            <span>example@huddle.com</span>
          </li>
        </ul>
        <ul>
          <li>About Us</li>
          <li>What We Do</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <SocialMedia />
      </Flex>
    </StyledFooter>
  );
}

export default Footer;

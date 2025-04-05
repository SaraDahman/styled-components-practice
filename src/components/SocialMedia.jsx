import { StyledSocialMedia } from './styles/Footer.styles';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

function SocialMedia() {
  let iconStyles = { fill: 'white', fontSize: '1.2rem' };

  return (
    <StyledSocialMedia>
      <ul>
        <li>
          <FaFacebookF style={iconStyles} />
        </li>
        <li>
          <FaTwitter style={iconStyles} />
        </li>
        <li>
          <FaInstagram style={iconStyles} />
        </li>
      </ul>
    </StyledSocialMedia>
  );
}

export default SocialMedia;

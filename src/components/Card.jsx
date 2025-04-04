import { StyledCard } from './styles/Card.styles';
import { Image } from './styles/Image.styles';

function Card({ item }) {
  console.log(!item.id % 2);
  return (
    <StyledCard $reverse={item.id % 2 == 0}>
      <div>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
      <Image src={item.image} />
    </StyledCard>
  );
}

export default Card;

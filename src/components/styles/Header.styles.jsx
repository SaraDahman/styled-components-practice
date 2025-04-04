import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral.paleCyan};
  background-image: url(${(props) => props.$bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 2rem 1rem;

    nav img {
      width: 20%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    nav img {
      width: 30%;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

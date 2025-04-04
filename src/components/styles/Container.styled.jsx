import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 4rem 5rem;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 4rem 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 4rem 1rem;
  }
`;

export default Container;

import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.8rem 3.5rem;
  border: 0;
  background-color: ${({ $bg }) => $bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  border-radius: 50px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.9rem;
  &:hover {
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 0.7rem;
    padding: 0.5rem 2rem;
  }
`;

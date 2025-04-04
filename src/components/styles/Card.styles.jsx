import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 3rem 3rem 3rem 4rem;
  margin: 2rem 0;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 40%;
  }

  div h2 {
    font-size: 1.8rem;
  }

  div p {
    color: #808d99;
  }

  img {
    width: 35%;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
    img,
    div {
      width: 100%;
    }

    div {
      align-items: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    div h2 {
      font-size: 1.5rem;
    }

    div p {
      font-size: 0.8rem;
    }
  }
`;

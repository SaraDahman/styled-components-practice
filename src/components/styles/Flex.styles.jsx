import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: ${({ $footer }) => ($footer ? 'flex-start' : 'center')};
  gap: ${({ $footer }) => ($footer ? '8rem' : '0')};

  & > * {
    flex: 1;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    padding-right: 5rem;
  }

  div h1 {
    font-size: 2.5rem;
  }

  div p {
    font-size: 1.1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    gap: ${({ $footer }) => ($footer ? '0.5rem' : '3rem')};
    padding: ${({ $footer }) => ($footer ? '0' : '0 3rem')};

    div {
      text-align: center;
      align-items: center;
      padding: 0;
    }

    div h1 {
      font-size: 1.8rem;
    }

    div p {
      font-size: 1rem;
    }

    img.header-image {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: ${({ $footer }) => ($footer ? '0' : '0 1.5rem')};

    div h1 {
      font-size: 1.5rem;
    }

    div p {
      font-size: 1rem;
    }
  }
`;

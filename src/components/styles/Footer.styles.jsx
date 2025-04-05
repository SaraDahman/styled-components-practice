import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 4rem 5rem 1rem;
  padding-top: 10rem;
  background-color: ${({ theme }) => theme.colors.neutral.darkCyan};
  color: #fff;

  img {
    filter: brightness(0) invert(1);
    margin-bottom: 2rem;
  }
  span {
    color: #fff;
  }

  ul {
    list-style: none;
  }

  ul li {
    color: #fff;
    margin-bottom: 1.1rem;
  }

  .contact-info li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 7rem 1rem;
  }
`;

export const StyledSocialMedia = styled.div`
  ul {
    display: flex;
    gap: 1rem;
  }

  ul li {
    border: solid #fff 1px;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    ul {
      gap: 0.5rem;
    }
  }
`;

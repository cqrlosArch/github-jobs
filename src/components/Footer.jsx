import styled from 'styled-components';

const FooterStyled = styled.footer`
  color: var(--gray);
  text-align: center;
  & p {
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>Carlos Díaz 2021 @devchallenges.io</p>
    </FooterStyled>
  );
};

export default Footer;

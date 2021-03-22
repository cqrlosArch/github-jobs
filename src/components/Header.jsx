import styled from 'styled-components';

const HeaderStyled = styled.header`
  color: var(--header);
  & h1 {
    font-weight: bold;
    font-size: 2.5rem;
  }
  & span {
    font-weight: 300;
    font-size: 2.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        Github <span>Jobs</span>
      </h1>
    </HeaderStyled>
  );
};

export default Header;

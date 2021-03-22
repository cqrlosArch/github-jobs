import { useContext } from 'react';
import styled from 'styled-components';
import imgHero from '../images/backgroundImg.png';
import { AppContext } from '../context/Context';

const MainFilterStyled = styled.div`
  width: 100%;
  background-image: url(${imgHero});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  border-radius: 8px;
  height: 138px;
  perspective: 1500px;
  display: grid;
  place-items: center;
`;

const FormMainStyled = styled.form`
  position: relative;
  height: 55px;
  width: 315px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  @media (min-width: 760px) {
    width: 615px;
  }
`;
const FormMainInput = styled.input.attrs(() => ({
  type: 'text',
  name: 'description',
  placeholder: 'Title, companies, experti...',
}))`
  border-radius: inherit;
  width: inherit;
  height: inherit;
  outline: none;
  border: none;
  padding-left: 2.2rem;
`;

const FormMainIcon = styled.span.attrs(() => ({
  className: 'material-icons',
}))`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(10px, -50%);
  color: var(--gray);
  font-size: 1.2rem;
`;

const FormMainButton = styled.button.attrs(() => ({
  type: 'submit',
}))`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-10px, -50%);
  width: 100px;
  height: 47px;
  outline: none;
  border: none;
  background-color: var(--blue);
  color: var(--white);
  border-radius: 4px;
  cursor: pointer;
`;

const MainFilter = () => {
  const { onDescriptionFilterChange } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    onDescriptionFilterChange(e.target.description.value);
  };
  return (
    <MainFilterStyled>
      <FormMainStyled onSubmit={(e) => onSubmit(e)}>
        <FormMainIcon>work_outline</FormMainIcon>
        <FormMainInput />
        <FormMainButton>Search</FormMainButton>
      </FormMainStyled>
    </MainFilterStyled>
  );
};

export default MainFilter;

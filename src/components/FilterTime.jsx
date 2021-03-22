import { useContext, useState } from 'react';
import styled from 'styled-components';
import doneSVG from '../images/done.svg';
import { AppContext } from '../context/Context';

const FilterTimeStyled = styled.aside`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  color: var(--blueText);
`;

const FilterTimeForm = styled.form`
  .location {
    position: relative;
    width: 100%;
    margin-top: 1rem;
  }
  .legend {
    color: var(--gray);
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
  }
  .fieldset {
    border: none;
    display: flex;
    width: 100%;
    align-items: center;
  }
  .radio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .radio-control {
    display: flex;
    width: 30%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }
`;

const FilterTimeLabelCheckbox = styled.label.attrs(() => ({
  htmlFor: 'full-time',
}))`
  margin-left: 0.8rem;
  display: block;
  line-height: 0;
  font-size: 0.8rem;
`;
const FilterTimeInputCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
  id: 'full-time',
  name: 'full-time',
}))`
  outline: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: var(--bgColor);
  border: 1px solid var(--gray);
  box-sizing: border-box;
  border-radius: 2px;
  position: relative;
  display: grid;
  place-items: center;

  &:checked::after {
    content: '';
    background: url();
    position: absolute;

    width: 20px;
    height: 20px;
    background: url(${doneSVG}) no-repeat;
    background-size: 100%;
  }
`;

const FilterTimeInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'City, state, zip code or country',
  name: 'place',
}))`
  border-radius: inherit;
  width: inherit;
  max-width: 350px;
  height: inherit;
  outline: none;
  border: none;
  padding-left: 2.2rem;
  height: 48px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

const FilterTimeIcon = styled.span.attrs(() => ({
  className: 'material-icons',
}))`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(20px, -50%);
  color: var(--gray);
  font-size: 1.2rem;
`;

const FilterTimeRadio = styled.input.attrs(({ id, value, defaultChecked }) => ({
  type: 'radio',
  name: 'location',
  defaultChecked,
  id,
  value,
}))`
  border: 1px solid #b9bdcf;

  appearance: none;
  min-width: 18px;
  min-height: 18px;
  border-radius: 50%;
  position: relative;
  display: grid;
  place-items: center;
  outline: none;
  cursor: pointer;

  &:checked::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--blue);
  }
`;

const FilterTimeRadioLabel = styled.label.attrs(({ htmlFor }) => ({
  htmlFor,
}))`
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
  width: 100%;
  margin-left: 0.5rem;
  text-transform: capitalize;
`;

const FilterTime = () => {
  const defaultPlaces = ['london', 'amsterdam', 'new york', 'berlin'];
  const [value, setValue] = useState('');

  const {
    onFullTimeFilterChange,
    onLocationFilterChange,
    onFilterByPlace,
  } = useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterByPlace(value);
    setValue('');
  };
  return (
    <FilterTimeStyled>
      <FilterTimeForm onSubmit={(e) => handleSubmit(e)}>
        <fieldset className="fieldset">
          <FilterTimeInputCheckbox
            onChange={(e) => onFullTimeFilterChange(e.target.checked)}
          />
          <FilterTimeLabelCheckbox>Full time</FilterTimeLabelCheckbox>
        </fieldset>
        <fieldset className="fieldset location">
          <legend className="legend">LOCATION</legend>
          <FilterTimeIcon>public</FilterTimeIcon>
          <FilterTimeInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset radio">
          {defaultPlaces.map((place) => (
            <div className="radio-control" key={place}>
              <FilterTimeRadio
                id={place}
                value={place}
                defaultChecked={place === defaultPlaces[1]}
                onChange={(e) => onLocationFilterChange(e.target.value)}
              />
              <FilterTimeRadioLabel htmlFor={place}>
                {place}
              </FilterTimeRadioLabel>
            </div>
          ))}
        </fieldset>
      </FilterTimeForm>
    </FilterTimeStyled>
  );
};

export default FilterTime;

import styled from 'styled-components';
import worldSVG from '../images/city.svg';
import clockSVG from '../images/clock.svg';

const JobStyled = styled.div`
  background-color: var(--white);
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;
  color: var(--blueText);
  padding: 0.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 1rem;
  height: 147px;
  @media (min-width: 760px) {
    height: 130px;
    align-content: center;
  }
`;
const JobImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  padding: 0.5rem;
  border-radius: 10px;
  @media (min-width: 760px) {
    max-height: 110px;
    justify-self: center;
    padding: 1.5rem;
  }
`;
const JobBody = styled.div`
  padding: 0.5rem;
  @media (min-width: 760px) {
    padding: 0;
  }
`;
const JobCompany = styled.p`
  font-weight: 700;
  font-size: 1rem;
  margin: 0;
`;
const JobTitle = styled.h2`
  font-weight: 500;
  font-size: 0.7rem;
`;
const JobTime = styled.p`
  border: 1px solid #334680;
  width: 63px;
  text-align: center;
  line-height: 1;
  padding: 0.3rem 0.3rem;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  @media (min-width: 760px) {
    margin-bottom: 0;
  }
`;
const JobFooter = styled.div`
  grid-column: 2/-1;
  display: flex;
  align-items: center;
  width: 80%;
  padding-left: 1rem;
  justify-content: space-between;
  @media (min-width: 760px) {
    justify-content: flex-end;
  }
`;
const JobCity = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--gray);
  position: relative;
  @media (min-width: 760px) {
    margin-right: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background: url(${worldSVG}) no-repeat;
    background-size: 100%;
  }
`;
const JobDate = styled.time`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--gray);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    background: url(${clockSVG}) no-repeat;
    background-size: 100%;
  }
`;

const Job = ({ card }) => {
  const {
    imgSrc,
    title,
    description,
    city,
    date,
    onClick,
    specialMarker,
  } = card;

  return (
    <JobStyled onClick={onClick}>
      <JobImg src={imgSrc} alt="" />
      <JobBody>
        <JobCompany>{title}</JobCompany>
        <JobTitle>{description}</JobTitle>
        {specialMarker && <JobTime>{specialMarker}</JobTime>}
      </JobBody>
      <JobFooter>
        <JobCity>{city}</JobCity>
        <JobDate>{date}</JobDate>
      </JobFooter>
    </JobStyled>
  );
};

export default Job;

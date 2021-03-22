import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Parser from 'html-react-parser';
import Loader from 'react-loader-spinner';
import { getDetails } from '../utils/api';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-columns: 100%;
  @media (min-width: 760px) {
    grid-template-columns: 30% 70%;
  }
`;
const Apply = styled.div`
  word-wrap: break-word;
  padding: 1rem;
`;
const Arrow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Subtitle = styled.h4`
  color: var(--gray);
  font-size: 14px;
`;
const Text = styled.span`
  color: var(--blueText);
  font-size: 14px;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 25px;
  color: var(--blueText);
`;
const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  & h5 {
    color: var(--blueText);
    font-size: 20px;
  }
  & p {
    color: var(--gray);
  }
`;
const Logo = styled.div`
  width: 80px;
  height: 50px;
  & img {
    max-width: 100%;
  }
`;
const Article = styled.article`
  color: var(--blueText);
  font-size: 16px;
  line-height: 1.5;
`;

function Details() {
  let { jobId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({
    company: '',
    company_logo: '',
    company_url: '',
    created_at: '',
    description: '',
    how_to_apply: '',
    id: '',
    location: '',
    title: '',
    type: '',
    url: '',
  });

  const startData = useCallback(async () => {
    setIsLoading(true);

    const position = await getDetails(jobId);

    setPosition(position);

    setIsLoading(false);
  }, [jobId]);

  useEffect(() => {
    startData();
  }, [startData]);

  const getFormatedDate = (date) => {
    const formattedDate = new Date(date).toISOString().slice(0, 10);
    return formattedDate;
  };

  return (
    <Section>
      {!isLoading ? (
        <>
          <Apply>
            <Arrow>
              <span class="material-icons" aria-label="back">
                keyboard_backspace
              </span>
              <Link to="/" id="back">
                Back to search
              </Link>
            </Arrow>
            <Subtitle>HOW TO APPLY</Subtitle>
            <Text>
              {position?.how_to_apply && Parser(position?.how_to_apply)}
            </Text>
          </Apply>
          <div>
            <Title>
              {position?.title}
              {position?.type === 'Full Time' ? <span>Full time</span> : ''}
            </Title>
            <ContainerLogo>
              <Logo>
                <img src={position?.company_logo} alt=""></img>
              </Logo>
              <div>
                <h5>{position?.company}</h5>
                <p>{position?.location}</p>
                <p>
                  {position?.created_at &&
                    getFormatedDate(position?.created_at)}
                </p>
              </div>
            </ContainerLogo>
            <Article>
              {position?.description && Parser(position?.description)}
            </Article>
          </div>
        </>
      ) : (
        <div>
          <Loader type="ThreeDots" color="#1E86FF" width={100} height={100} />
        </div>
      )}
    </Section>
  );
}

export default Details;

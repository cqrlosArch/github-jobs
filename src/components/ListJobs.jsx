import { useContext } from 'react';
import styled from 'styled-components';
import Job from './Job';

import { AppContext } from '../context/Context';

const ListJobsStyled = styled.div`
  margin: 2rem 0;
`;

const ListJobs = () => {
  const { cards } = useContext(AppContext);

  return (
    <ListJobsStyled>
      {cards?.map((card) => (
        <Job key={card.id} card={card} />
      ))}
    </ListJobsStyled>
  );
};

export default ListJobs;

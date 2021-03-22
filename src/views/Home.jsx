import styled from 'styled-components';
import MainFilter from '../components/MainFilter';
import Loader from 'react-loader-spinner';
import FilterTime from '../components/FilterTime';
import ListJobs from '../components/ListJobs';
import { AppConsumer } from '../context/Context';

const HomeStyled = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  @media (min-width: 760px) {
    grid-template-columns: 30% 70%;
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <MainFilter />
      <Container>
        <FilterTime />
        <AppConsumer>
          {({ isLoading }) =>
            isLoading ? (
              <Loader
                type="ThreeDots"
                color="#1E86FF"
                width={100}
                height={100}
              />
            ) : (
              <ListJobs />
            )
          }
        </AppConsumer>
      </Container>
    </HomeStyled>
  );
};

export default Home;

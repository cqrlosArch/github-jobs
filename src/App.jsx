import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import { AppProvider } from './context/Context';
import Home from './views/Home';
import Details from './views/Details';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

const GlobalStyled = createGlobalStyle`
  :root{
    --bgColor:#F6F7FB;
    --white:#fff;
    --blue:#1E86FF;
    --blueText:#334680;
    --gray:#B9BDCF;
    --header: #282538;
;
  }

  html{
    font-size:16px;
    font-family: 'Roboto', sans-serif;
    box-sizing:border-box;
    background-color: var(--bgColor);
  }

  *,
  *::before,
  *::after{
    box-sizing:inherit;
  }

  body{
    margin:0;
    padding:1rem;
 
  }

  ::placeholder{
    font-size:12px;
    color:var(--gray);
  }

  .wrapper{
    display:flex;
    min-height:95vh;
    flex-direction:column;
    justify-content:space-between;
    width:90%;
    max-width:1440px;
    margin-left:auto;
    margin-right:auto;
    
  }

  .container-loader{
    margin:4rem auto;
   
  }
`;

const Wrapper = ({ children }) => {
  return <main className="wrapper">{children}</main>;
};

function App() {
  return (
    <>
      <GlobalStyled />
      <Router>
        <AppProvider>
          <Wrapper>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/details/:jobId">
                <Details />
              </Route>
              <Route path="*">
                <p>404</p>
              </Route>
            </Switch>
            <Footer />
          </Wrapper>
        </AppProvider>
      </Router>
    </>
  );
}

export default App;

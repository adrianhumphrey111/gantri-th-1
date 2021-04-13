import './App.css';
import FloatingHeader from "./components/header";
import Welcome from "./components/welcome";
import Stories from "./components/stories";
import FoundersBlock from "./components/foundersBlock";
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

const media = {
    desktop: `@media(min-width: 991px)`
}

const Container = styled.div`
  overflow-y: scroll;
  top: 70px;
  position: relative;
  
  ${media.desktop}{
    top: 90px;
  }
`;

function App() {
  return (
      <Router>
          <Route path="/stories">
              <FloatingHeader/>
              <Container>
                  <FloatingHeader/>
                  <Stories/>
              </Container>
          </Route>
          <Route exact path="/">
              <FloatingHeader/>
              <Container>
                  <Welcome/>
                  <FoundersBlock/>
              </Container>
          </Route>
      </Router>
  );
}

export default App;

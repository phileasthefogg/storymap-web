import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./configs/theme";
import styled from "styled-components";
import AuthFlow from "./components/views/AuthFlow";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/templates/Layout";

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.white};
`;

const Link = styled.a`
  color: #61dafb;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={AuthFlow} />
            <Layout />
          </Switch>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;

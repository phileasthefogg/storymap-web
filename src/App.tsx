import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./configs/theme";
import styled from "styled-components";
import AuthFlow from "./components/views/AuthFlow";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/templates/Layout";
import useAuth from "./hooks/useAuth";

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => {
  useAuth();
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

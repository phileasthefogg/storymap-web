import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../atoms/PrivateRoute";

import Map from "../views/Map";
import Places from "../views/Places";
import Memories from "../views/Memories";
import Profile from "../views/Profile";
import Pending from "../views/Pending";

const Wrapper = styled.div`
  display: flex;
  background-color: lightgrey;
  height: calc(100vh - 7.5vh);
  width: 100vw;
`;

const MainRouter = () => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/map" component={Map} />
        <Route path="/places" component={Places} />
        <Route path="/memories" component={Memories} />
        <Route path="/profile" component={Profile} />
        <PrivateRoute path="/pending" component={Pending} />
        <Redirect to="/map" />
      </Switch>
    </Wrapper>
  );
};

export default MainRouter;

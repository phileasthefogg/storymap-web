import React from "react";
import styled from "styled-components";
import NavLink from "../atoms/NavLink";
import { userSelector } from "../../reducers/rootReducer";
import { useSelector } from "react-redux";

interface INavigationHeader {}

const Wrapper = styled.div`
  width: 100vw;
  height: 7.5vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavigationHeader = ({}: INavigationHeader) => {
  const user = useSelector(userSelector);
  return (
    <Wrapper>
      {user.role === "Curator" ? (
        <NavLink to="/pending" title="Pending" />
      ) : null}
      <NavLink to="/map" title="Map" />
      <NavLink to="/places" title="Places" />
      <NavLink to="/memories" title="Memories" />
      <NavLink to="/profile" title="Profile" />
      <NavLink to="/login" title="Login" />
      {user.uid ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Welcome back {user.displayName}!</span>
          <span>You are signed in as a {user.role}</span>
        </div>
      ) : null}
    </Wrapper>
  );
};

export default NavigationHeader;

import React from "react";
import styled from "styled-components";
import NavLink from "../atoms/NavLink";
import { userSelector } from "../../reducers/rootReducer";
import { useSelector } from "react-redux";

//TODO: create a helper function to access these login/logout auth funcs.
import { firebase } from "../../helpers/firebase";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  width: 100vw;
  height: 7.5vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavigationHeader = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {user.role === "Curator" ? (
        <NavLink to="/pending" title="Pending" />
      ) : null}
      <NavLink to="/map" title="Map" />
      <NavLink to="/places" title="Places" />
      <NavLink to="/memories" title="Memories" />
      <NavLink to="/profile" title="Profile" />
      {user.uid ? (
        <>
          <span
            style={{ textDecoration: "underline" }}
            onClick={() => {
              firebase
                .auth()
                .signOut()
                .then(() => {
                  dispatch({
                    type: "UPDATE_USER",
                    payload: {
                      uid: "",
                      displayName: "",
                      email: null,
                      photoUrl: null,
                      role: null,
                    }, //TODO: import initial state from user reducer to use here
                  });
                })
                .catch((errr) => {
                  console.log("navHeader signout ERRR", errr);
                });
            }}
          >
            Logout
          </span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Welcome back {user.displayName}!</span>
            <span>You are signed in as a {user.role}</span>
          </div>
        </>
      ) : (
        <NavLink to="/login" title="Login" />
      )}
    </Wrapper>
  );
};

export default NavigationHeader;

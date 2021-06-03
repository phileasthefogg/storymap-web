// import React, { useEffect } from "react";
// import styled from "styled-components";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { app } from "../../helpers/firebase";
import { userSelector } from "../../reducers/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const AuthFlow = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  //handle User already signed in
  if (user.uid) return <Redirect to="/map" />;
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/map",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authRes: any) => {
        const { uid, displayName, email, photoUrl } = authRes.user;
        app
          .auth()
          .currentUser?.getIdTokenResult()
          .then((token) => {
            const role = token.claims.isCurator ? "Curator" : "User";
            dispatch({
              type: "UPDATE_USER",
              payload: { uid, displayName, email, photoUrl, role },
            });
          });
        // Avoid redirects after sign-in by returning false.
        return false;
      },
    },
  };
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
    </div>
  );
};

export default AuthFlow;

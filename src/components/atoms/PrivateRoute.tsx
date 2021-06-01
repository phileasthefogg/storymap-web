import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../reducers/rootReducer";
import { RouteProps } from "react-router";

const PrivateRoute = (props: RouteProps) => {
  const user = useSelector(userSelector);
  console.log("privateroute", user);
  if (user.role) {
    return <Route {...props} />;
  }

  return <Redirect to={"/login"} />;
};

export default PrivateRoute;

import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <>
      {isAuthenticated() ? (
        <Route {...rest}>{children}</Route>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;

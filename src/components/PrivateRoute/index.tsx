import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

interface IProps {
  children: React.ReactNode;
}
const PrivateRoute: React.FC<IProps> = ({ children, ...rest }) => {
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

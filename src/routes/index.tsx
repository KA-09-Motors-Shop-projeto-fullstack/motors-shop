import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header authenticaded />
      </Route>
    </Switch>
  );
};

export default Routes;

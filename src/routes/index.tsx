import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header authenticaded />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;

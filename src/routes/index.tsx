import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalComponent from "../components/ModalSucess";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header authenticaded />
        <ModalComponent modalBody="Oi eu sou um modal" modalHeader="Sucesso!" />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;

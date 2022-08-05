import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalSucess from "../components/ModalSucess";

const Routes: React.FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  return (
    <Switch>
      <Route exact path="/">
        <Header authenticaded />
        <ModalSucess modalShow={modalShow} setModalShow={setModalShow} />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;

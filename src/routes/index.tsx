import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalCreate from "../components/ModalCreate";

const Routes: React.FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const show = () => setModalShow(true);
  return (
    <Switch>
      <Route exact path="/">
        <Header authenticaded />
        <Button typeButton="brand1" typeFont="big" onClick={show}>
          Mostrar modal
        </Button>
        <ModalCreate modalShow={modalShow} setModalShow={setModalShow} />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;

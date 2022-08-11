import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalCreate from "../components/ModalCreate";
import ProductCard from "../components/ProductCard";
import Profile from "../pages/Profile";

const Routes: React.FC = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const show = () => setModalShow(true);
  return (
    <Switch>
      <Route exact path="/">
        <Header authenticaded />
        <Profile />
        <Footer />
      </Route>
    </Switch>
  );
};

export default Routes;

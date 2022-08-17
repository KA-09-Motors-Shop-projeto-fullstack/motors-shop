import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import ModalCreate from "../components/ModalCreate";
import PrivateRoute from "../components/PrivateRoute";
import ProductCard from "../components/ProductCard";
import LoginPage from "../pages/Login";
import Profile from "../pages/Profile";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;

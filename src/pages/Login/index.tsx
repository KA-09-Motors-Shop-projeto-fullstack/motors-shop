import React from "react";
import { Redirect } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../components/Login";
import { isAuthenticated } from "../../services/auth";
import { Main } from "./styles";

const LoginPage: React.FC = () => {
  if (isAuthenticated()) {
    return <Redirect to="profile" />;
  }
  return (
    <>
      <Header />
      <Main>
        <Login />
      </Main>
      <Footer />
    </>
  );
};

export default LoginPage;

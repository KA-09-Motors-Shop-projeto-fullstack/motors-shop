import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "../../components/Login";
import { Main } from "./styles";

const LoginPage: React.FC = () => {
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

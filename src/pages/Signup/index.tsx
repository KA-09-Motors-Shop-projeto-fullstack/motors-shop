import React from "react";
import { Redirect } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { isAuthenticated } from "../../services/auth";

const SignupPage: React.FC = () => {
  if (isAuthenticated()) return <Redirect to="/profile" />;
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default SignupPage;

import React from "react";

import Header from "../Header/Header";
import LoginForm from "./LoginForm";

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <Header showSignup={true} showLogin={false} />
      <h2>Login</h2>
      <div className="infocontainer">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

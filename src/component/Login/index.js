import React from "react";

import Header from "../Header/Header";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
import React from "react";
import Header from "../Header/Header";
import SignUpDetails from "./SignUpDetails";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="App">
      <Header />
      <h2>Create Account</h2>
      <div className="infocontainer">
        <SignUpDetails />
      </div>
    </div>
  );
};

export default SignUpPage;

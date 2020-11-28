import React from "react";
import "./LoginButton.css";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div>
      <Link to="/login">
        <button className="loginbtn">Login</button>
      </Link>
    </div>
  );
};

export default LoginButton;

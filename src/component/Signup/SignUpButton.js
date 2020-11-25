import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const SignUpButton = () => (
  <div>
    <Link to="/signuppage">
      <button className="signupbtn">Signup</button>
    </Link>
  </div>
);

export default SignUpButton;

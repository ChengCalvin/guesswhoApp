import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <div>
      <Link to="/signuppage">
        <button className="signupbtn">Create Account</button>
      </Link>
    </div>
  );
};

export default SignUpButton;

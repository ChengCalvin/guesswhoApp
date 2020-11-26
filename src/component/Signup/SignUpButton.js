import React from "react";
import "./SignUpButton.css";
import { Link } from "react-router-dom";

const SignUpButton = () => {
  return (
    <div>
      <Link to="/signup">
        <button className="signupbtn">Create Account</button>
      </Link>
    </div>
  );
};

export default SignUpButton;

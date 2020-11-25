import React from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";

const SignUpButton = () => {
  const historyTracker = () => {
    useHistory().push("/signuppage");
  };
  return (
    <div>
      <Link to="/signuppage">
        <button onClick={historyTracker} className="signupbtn">
          Signup
        </button>
      </Link>
    </div>
  );
};

export default SignUpButton;

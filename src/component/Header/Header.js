import React from "react";
import SignUpButton from "../Signup/SignUpButton";
import LoginButton from "../Login/LoginButton";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <div className="flexaligntitleandbtn">
          <div className="headertitle">
            <Link to="/">
              <h1>League of Legend Team Guessing Game</h1>
            </Link>
          </div>
          <div className="btncontainer">
            {props.showSignup ? <SignUpButton /> : <></>}
            {props.showLogin ? <LoginButton /> : <></>}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

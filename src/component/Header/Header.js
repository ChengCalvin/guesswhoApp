import React from "react";
import SignUpButton from "../Signup/SignUpButton";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="flexaligntitleandbtn">
          <div className="headertitle">
            <h1>League of Legend Team Guessing Game</h1>
          </div>
          <div>
            <SignUpButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

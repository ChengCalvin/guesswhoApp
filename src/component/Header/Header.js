import React from "react";
import SignUpButton from "../Signup/SignUpButton";
import LoginButton from "../Login/LoginButton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoginStatus } from "../../reducers/action";
import logoutImg from "../../images/logout.png";
import "./Header.css";

const Header = (props) => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    dispatch(setLoginStatus(false, {}));
    history.push("/");
  };

  return (
    <>
      <header className="header">
        <div className="flexaligntitleandbtn">
          <div className="headertitle">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>League of Legend Team Guessing Game</h1>
            </Link>
          </div>
          {userState.loginStatus ? (
            <div className="userloggedin">
              <div className="userdisplay">{userState.user.firstName}</div>
              <img src={logoutImg} alt="logoutbutton" onClick={logout} />
            </div>
          ) : (
            <div className="btncontainer">
              {props.showSignup ? <SignUpButton /> : <></>}
              {props.showLogin ? <LoginButton /> : <></>}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

import React, { useEffect } from "react";
import SignUpButton from "../Signup/SignUpButton";
import LoginButton from "../Login/LoginButton";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoginStatus, setUserGameScore } from "../../reducers/action";
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
  //add use effect to check for user logged in?
  useEffect(() => {
    const currentUser = localStorage.getItem("currentEmail");
    const loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      axios
        .get(`https://guessthelolteam.herokuapp.com/users/${currentUser}`)
        .then((response) => {
          dispatch(setLoginStatus(loginStatus, response.data.loginUser));
          dispatch(setUserGameScore(response.data.loginUser.gameScore));
        });
    }
  }, []);

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

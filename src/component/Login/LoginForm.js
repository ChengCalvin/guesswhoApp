import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getErrorMessage, setLoginStatus } from "../../reducers/action";

const LoginForm = () => {
  const userState = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const loginFormHandler = (event) => {
    event.preventDefault();

    if (user.email === "" && user.password === "") {
      dispatch(getErrorMessage("Invalid Email and Password"));
    } else {
      axios
        .get(`https://guessthelolteam.herokuapp.com/users/${user.email}`)
        .then((response) => {
          if (response.data.loginUser.password !== user.password) {
            dispatch(getErrorMessage("Password Invalid"));
          } else {
            dispatch(setLoginStatus(true, response.data.loginUser));
            localStorage.setItem("currentEmail", response.data.loginUser.email);
            localStorage.setItem("loginStatus", true);
            history.push("/");
          }
        })
        .catch((error) => {
          dispatch(getErrorMessage(error.response.data.errorMessage));
        });
    }
  };

  return (
    <div>
      <form className="form" onSubmit={loginFormHandler}>
        <div>
          <input
            className="inputfield"
            type="text"
            placeholder="Email"
            name="email"
            value={user.email || ""}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <input
            className="inputfield"
            type="password"
            placeholder="Password"
            name="password"
            value={user.password || ""}
            onChange={inputChangeHandler}
          />
        </div>
        {userState.errorStatus === "error" && (
          <div style={{ color: "red" }}>{userState.errorMessage}</div>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

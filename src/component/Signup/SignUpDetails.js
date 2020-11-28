import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signupError } from "../../reducers/action";
import "./SignUpPage.css";
import { register } from "../../serviceWorker";

const SignUpDetails = () => {
  const userState = useSelector((state) => state.user);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    leagueRank: "",
    email: "",
    password: "",
    password_confirm: "",
    gameScore: 0,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const inputChangeHandler = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    const user = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      leagueRank: newUser.leagueRank,
      email: newUser.email,
      password: newUser.password,
      password_confirm: newUser.password_confirm,
    };
    console.log("am i running");
    axios
      .post("https://guessthelolteam.herokuapp.com/api/users", user)
      .then((response) => {
        if (response.data.success) {
          history.push("/login");
        }
      })
      .catch((error) => {
        dispatch(signupError(error.response.data.errorMessage));
      });
  };

  return (
    <div>
      <form className="form" onSubmit={submitFormHandler}>
        {userState.errorStatus === "error" && (
          <div style={{ color: "red" }}>{userState.errorMessage}</div>
        )}
        <div>
          <input
            className="inputfield"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={newUser.firstName}
            onChange={inputChangeHandler}
            ref={register}
          />
        </div>
        <div>
          <input
            className="inputfield"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={newUser.lastName}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <input
            className="inputfield"
            type="text"
            placeholder="Your Rank: e.g Platinum 1"
            name="leagueRank"
            value={newUser.leagueRank}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <input
            className="inputfield"
            type="text"
            placeholder="Email"
            name="email"
            value={newUser.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <input
            className="inputfield"
            type="password"
            placeholder="password"
            name="password"
            value={newUser.password}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <input
            className="inputfield"
            type="password"
            placeholder="Confirm Password"
            name="password_confirm"
            value={newUser.password_confirm}
            onChange={inputChangeHandler}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default SignUpDetails;

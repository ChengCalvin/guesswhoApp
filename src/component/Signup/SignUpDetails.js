import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signupError } from "../../redux/action";

// form, submit, call api endpoint and send data to database
const SignUpDetails = () => {
  const userState = useSelector((state) => state.user);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    leagueRank: "",
    email: "",
    password: "",
    password_confirm: "",
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
    // post -> when successful, send to login page -> Send to front with the game
    axios
      .post("https://guessthelolteam.herokuapp.com/api/users", user)
      .then((response) => {
        console.log("Post Response: ", response);
      })
      .then((data) => {
        if (data.success) {
          history.push("/login");
        } else dispatch(signupError(data.errorMessage));
      })
      .catch((error) => {
        dispatch(signupError(error.errorMessage));
        console.log("user post error", error);
      });
  };

  return (
    <div>
      <form onClick={submitFormHandler}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={newUser.firstName}
            onChange={inputChangeHandler}
            required
          />
          {userState.errorMessage ? <div>{userState.errorMessage}</div> : <></>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={newUser.lastName}
            onChange={inputChangeHandler}
            required
          />
          {userState.errorMessage ? <div>{userState.errorMessage}</div> : <></>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Your Rank: e.g Platinum 1"
            name="leagueRank"
            value={newUser.leagueRank}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={newUser.email}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={newUser.password}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password_confirm"
            value={newUser.password_confirm}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default SignUpDetails;

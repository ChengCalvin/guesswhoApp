import axios from "axios";
import React, { useState } from "react";

// form, submit, call api endpoint and send data to database
const SignUpDetails = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    leagueRank: "",
    email: "",
    password: "",
    password_confirm: "",
    errors: {},
  });

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
    console.log(user);
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

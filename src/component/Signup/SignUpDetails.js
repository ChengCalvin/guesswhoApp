import React, { useState } from "react";

// form, submit, call api endpoint and send data to database
const SignUpDetails = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirm: "",
    errors: {},
  });

  const inputChangeHandler = (event) => {
    setNewUser({ [event.target.name]: event.target.value });
    console.log("name", event.target.name);
    console.log("value", event.target.value);
  };

  const submitFormHandler = (event) => {
    const user = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      password_confirm: newUser.password_confirm,
    };
    console.log(user);
    console.log("newUser", newUser);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={newUser.firstName}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={newUser.lastName}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={newUser.email}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="password"
          name="password"
          value={newUser.password}
          onChange={inputChangeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Confirm Password"
          name="password_confirm"
          value={newUser.password_confirm}
          onChange={inputChangeHandler}
        />
      </div>
      <button onClick={() => submitFormHandler}>Create User</button>
    </div>
  );
};

export default SignUpDetails;

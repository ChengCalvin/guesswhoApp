import React, { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginFormHandler = (event) => {
    event.preventDefault();
  };

  const inputChangeHandler = (event) => {
    setUser({ [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onClick={loginFormHandler}>
        <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value="Email"
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value="Password"
            onChange={inputChangeHandler}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

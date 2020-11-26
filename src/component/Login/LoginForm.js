import React from "react";

const LoginForm = () => {
  const loginFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onClick={loginFormHandler}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

import React from "react";

import SignUpPage from "./component/Signup/index";
import LoginPage from "./component/Login/index";
import Homepage from "./component/Home/index";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </>
  );
};

export default App;

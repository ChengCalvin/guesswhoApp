import React from "react";

import SignUpPage from "./component/Signup/index";
import Homepage from "./component/Home/index";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/signuppage">
        <SignUpPage />
      </Route>
    </>
  );
};

export default App;

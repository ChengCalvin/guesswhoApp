import React from "react";

import SignUpPage from "./component/Signup/index";
import Homepage from "./component/Home/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

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

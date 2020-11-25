import React from "react";

import Team from "./component/team/team";
import Header from "./component/Header/Header";
import SignUpPage from "./component/Signup/index";
import Homepage from "./component/Home/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <div className="App">
          <Header />
          <h1>Guess which league of legend team won</h1>
          <Team />
        </div> */}

      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
    </>
  );
};

export default App;

import React from "react";

import Team from "./component/team/team";
import Header from "./component/Header/Header";
import SignUpPage from "./component/Signup/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <h1>Guess which league of legend team won</h1>
          <Team />
        </div>
        <Switch>
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

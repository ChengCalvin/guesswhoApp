import React from "react";

import Team from "./component/team/team";
import SignUpButton from "./component/Signup/SignUpButton";
import SignUpPage from "./component/Signup/SignUpPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="flexaligntitleandbtn">
          <div className="headertitle">
            <h1>League of Legend Team Guessing Game</h1>
          </div>
          <div>
            <Router>
              <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signup" component={SignUpPage} />
              </Switch>
              <SignUpButton />
            </Router>
          </div>
        </div>
      </header>
      <h1>Guess which league of legend team won</h1>
      <Team />
    </div>
  );
};

export default App;

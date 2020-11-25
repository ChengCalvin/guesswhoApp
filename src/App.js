import React from "react";

import Team from "./component/team/team";
import Header from "./component/Header/Header";
import SignUpButton from "./component/Signup/SignUpButton";
import SignUpPage from "./component/Signup/SignUpPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          {/* <header className="header">
            <div className="flexaligntitleandbtn">
              <div className="headertitle">
                <h1>League of Legend Team Guessing Game</h1>
              </div>
              <div>
                <SignUpButton />
              </div>
            </div>
          </header> */}
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

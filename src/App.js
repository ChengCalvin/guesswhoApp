import React from "react";

import Team from "./component/team/team";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <title>League of Legend Team Guessing Game</title>
      </header>
      <h1>Guess which league of legend team won</h1>
      <Team />
    </div>
  );
};

export default App;

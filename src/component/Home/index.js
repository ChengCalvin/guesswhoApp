import React from "react";

import Team from "../team/team";
import Header from "../Header/Header";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="App">
        <Header />
        <h1>Guess which league of legend team won</h1>
        <Team />
      </div>
    </>
  );
};

export default Homepage;

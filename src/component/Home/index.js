import React from "react";

import Team from "../team/team";
import Header from "../Header/Header";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="App">
        <Header />
        <h2>Guess which league of legend team won</h2>
        <Team />
      </div>
    </>
  );
};

export default Homepage;

import React from "react";
import "./champions.css";

const Champions = (props) => (
  <div className="championcontainer">
    <div>{props.data}</div>
  </div>
);

export default Champions;

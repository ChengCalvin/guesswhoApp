import React, { Component } from "react";
import Champions from "../champions/champions";
import axios from "axios";
import "./team.css";

//manipulate data fetching and displaying of team choice
class Team extends Component {
  state = {
    data: [],
    answer: false,
  };
  componentDidMount = () => {
    axios.get("http://localhost:5000/gamedata").then((res) => {
      this.setState({ data: res.data });
      console.log(res.data);
    });
  };

  answerClickHandler = (event) => {
    if (event.target.value === this.state.data.winner) {
      //change styling of background
      console.log("Correct");

      axios.get("http://localhost:5000/gamedata").then((res) => {
        this.setState({ data: res.data });
        console.log(res.data);
      });
    } else {
      console.log("Wrong");

      axios.get("http://localhost:5000/gamedata").then((res) => {
        this.setState({ data: res.data });
        console.log(res.data);
      });
    }
  };

  render() {
    return (
      <div>
        <div className="Team">
          <button onClick={this.answerClickHandler} value="Team A">
            Team A
          </button>
          {this.state.data.teamA?.map((champ, index) => (
            <Champions key={index} data={champ} />
          ))}
        </div>
        <div className="Team">
          <button onClick={this.answerClickHandler} value="Team B">
            Team B
          </button>
          {this.state.data.teamB?.map((champ, index) => (
            <Champions key={index} data={champ} />
          ))}
        </div>
      </div>
    );
  }
}

export default Team;

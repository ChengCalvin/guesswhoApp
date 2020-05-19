import React, { Component } from "react";
import Champions from "../champions/champions";
import axios from "axios";
import "./team.css";

//manipulate data fetching and displaying of team choice
class Team extends Component {
  state = {
    data: [],
    answer: "",
    correctAnswer: 0,
  };
  componentDidMount = () => {
    axios.get("https://guessthelolteam.herokuapp.com/gamedata").then((res) => {
      this.setState({ data: res.data });
      console.log(res.data);
    });
  };

  answerClickHandler = (event) => {
    if (event.target.value === this.state.data.winner) {
      //change styling of background
      console.log("Correct");
      this.setState({ answer: "Correct" });
      this.setState({ correctAnswer: this.state.correctAnswer + 1 });
      axios
        .get("https://guessthelolteam.herokuapp.com/gamedata")
        .then((res) => {
          this.setState({ data: res.data });
          console.log(res.data);
        });
    } else {
      console.log("Wrong");
      this.setState({ answer: "Wrong" });
      axios
        .get("https://guessthelolteam.herokuapp.com/gamedata")
        .then((res) => {
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
        <div className="Result">
          <h2>Result : {this.state.answer}</h2>
        </div>
        <div>
          <h2 className="Result">Score: {this.state.correctAnswer}</h2>
        </div>
      </div>
    );
  }
}

export default Team;

import React, { Component } from "react";
import Champions from "../champions/champions";
import axios from "axios";
import Spinner from "../UI/spinner";
import "./team.css";

class Team extends Component {
  state = {
    data: [],
    answer: "",
    correctAnswer: 0,
    isButtonDisabled: false,
    isloading: false,
  };

  componentDidMount = () => {
    this.setState({ isloading: true });
    axios.get("https://guessthelolteam.herokuapp.com/gamedata").then((res) => {
      this.setState({ data: res.data, isloading: false });
    });
  };

  answerClickHandler = (team) => {
    if (team === this.state.data.winner) {
      this.setState({
        answer: "Correct",
        correctAnswer: this.state.correctAnswer + 1,
        isButtonDisabled: true,
      });
    } else {
      this.setState({ answer: "Wrong", isButtonDisabled: true });
    }
  };

  newTeamHandler = () => {
    this.setState({ isloading: true });
    axios.get("https://guessthelolteam.herokuapp.com/gamedata").then((res) => {
      this.setState({ data: res.data, isloading: false });
    });
    this.setState({ isButtonDisabled: false });
  };

  render() {
    const teamLoad = (
      <div className="teamcontainer">
        <div className="Team">
          <button
            onClick={() => this.answerClickHandler("Team A")}
            value="Team A"
            disabled={this.state.isButtonDisabled}
          >
            {this.state.data.teamA?.map((champ, index) => (
              <Champions key={index} data={champ} />
            ))}
          </button>
        </div>
        <div className="vsicon">
          <div className="vsiconbackground">VS</div>
        </div>
        <div className="Team">
          <button
            onClick={() => this.answerClickHandler("Team B")}
            value="Team B"
            disabled={this.state.isButtonDisabled}
          >
            {this.state.data.teamB?.map((champ, index) => (
              <Champions key={index} data={champ} />
            ))}
          </button>
        </div>
      </div>
    );

    return (
      <div>
        {this.state.isloading ? <Spinner /> : teamLoad}
        <div className="resultcontainer">
          <div className="resultbackground">
            <div className="result">
              <h2>Result : {this.state.answer}</h2>
              <button onClick={this.newTeamHandler}>Next</button>
            </div>
            <div>
              <h2 className="result">Score: {this.state.correctAnswer}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

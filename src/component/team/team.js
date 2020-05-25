import React, { Component } from "react";
import Champions from "../champions/champions";
import axios from "axios";
import Spinner from "../UI/spinner";
import "./team.css";

//manipulate data fetching and displaying of team choice
class Team extends Component {
  state = {
    data: [],
    answer: "",
    correctAnswer: 0,
    isButtonDisabled: false,
    isloading: false,
  };
  //fetching the data
  componentDidMount = () => {
    this.setState({ isloading: true });
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
      this.setState({ isButtonDisabled: true });
      // axios
      //   .get("https://guessthelolteam.herokuapp.com/gamedata")
      //   .then((res) => {
      //     this.setState({ data: res.data });
      //     console.log(res.data);
      //   });
    } else {
      console.log("Wrong");
      this.setState({ answer: "Wrong" });
      this.setState({ isButtonDisabled: true });
      // axios
      //   .get("https://guessthelolteam.herokuapp.com/gamedata")
      //   .then((res) => {
      //     this.setState({ data: res.data });
      //     console.log(res.data);
      //   });
    }
  };

  newTeamHandler = () => {
    this.setState({ isloading: true });
    axios.get("https://guessthelolteam.herokuapp.com/gamedata").then((res) => {
      this.setState({ data: res.data });
      //console.log(res.data);
    });
    this.setState({ isButtonDisabled: false });
  };

  render() {
    let teamLoad = null;
    if (this.state.isloading) {
      teamLoad = <Spinner />;
    }
    if (this.state.data) {
      teamLoad = (
        <React.Fragment>
          <div className="Team">
            <button
              onClick={this.answerClickHandler}
              value="Team A"
              disabled={this.state.isButtonDisabled}
            >
              Team A
            </button>
            {this.state.data.teamA?.map((champ, index) => (
              <Champions key={index} data={champ} />
            ))}
          </div>
          <div className="Team">
            <button
              onClick={this.answerClickHandler}
              value="Team B"
              disabled={this.state.isButtonDisabled}
            >
              Team B
            </button>
            {this.state.data.teamB?.map((champ, index) => (
              <Champions key={index} data={champ} />
            ))}
          </div>
        </React.Fragment>
      );
    }
    return (
      <div>
        {teamLoad}
        <div className="Result">
          <h2>Result : {this.state.answer}</h2>
          <button onClick={this.newTeamHandler}>Next</button>
        </div>
        <div>
          <h2 className="Result">Score: {this.state.correctAnswer}</h2>
        </div>
      </div>
    );
  }
}

export default Team;

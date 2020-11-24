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
    isloading: true,
  };
  
  componentDidMount = () => {
    this.setState({ isloading: false });
    axios.get("https://guessthelolteam.herokuapp.com/gamedata").then((res) => {
      this.setState({ data: res.data });
    });
  };

  componentDidUpdate = (_prevProps, prevState) => {
    if (prevState.isButtonDisabled !== this.state.isButtonDisabled) {
      this.setState({isloading: true});
    } else this.setState({isloading: false});
  }

  answerClickHandler = (event) => {
    if (event.target.value === this.state.data.winner) {
      this.setState({ answer: "Correct" });
      this.setState({ correctAnswer: this.state.correctAnswer + 1 });
      this.setState({ isButtonDisabled: true });
    } else {
      this.setState({ answer: "Wrong" });
      this.setState({ isButtonDisabled: true });
    }
  };

  newTeamHandler = () => {
    this.setState({ isloading: false });
    axios.get("https://guessthelolteam.herokuapp.com/gamedata").then((res) => {
      this.setState({ data: res.data });
    });
    this.setState({ isButtonDisabled: false });
  };

  render() {
    const  teamLoad = (
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
    
    return (
      <div>
        {this.state.isloading ? <Spinner /> : teamLoad}
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

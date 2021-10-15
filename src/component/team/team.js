import React, { useState, useEffect } from "react";
import Champions from "../champions/champions";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../UI/spinner";
import "./team.css";
import { setUserGameScore } from "../../reducers/action";

const Team = () => {
  const userState = useSelector((state) => state.user);
  const [state, setState] = useState({
    data: [],
    answer: "",
    isButtonDisabled: false,
    isloading: true,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://guessthelolteam.herokuapp.com/gamedata")
      .then((res) => {
        setState({
          ...state,
          data: res.data,
          isloading: false,
        });
      })
      .catch((err) => console.log(err));
  }, [userState.user.gameScore]);

  const answerClickHandler = (team) => {
    if (team === state.data.winner) {
      const buttonIsDisabled = !state.isButtonDisabled;
      setState({
        ...state,
        answer: "Correct",
        isButtonDisabled: buttonIsDisabled,
      });
      const correctAnswerCounter = userState.user.gameScore + 1;
      dispatch(setUserGameScore(correctAnswerCounter));
    } else {
      setState({ ...state, answer: "Wrong", isButtonDisabled: true });
    }
    axios
      .patch(
        `https://guessthelolteam.herokuapp.com/api/users/${localStorage.getItem(
          "currentEmail"
        )}`,
        {
          email: localStorage.getItem("currentEmail"),
          gameScore: userState.user.gameScore,
        }
      )
      .then((res) => {
        dispatch(setUserGameScore(userState.gameScore));
      })
      .catch((err) => console.log(err));
  };

  const newTeamHandler = () => {
    setState({ ...state, isloading: true });
    axios.get("https://guessthelolteam.herokuapp.com/gamedata").then((res) => {
      setState({ ...state, data: res.data, isloading: false });
    });
    setState({ ...state, isButtonDisabled: false });
  };

  const teamLoad = (
    <div className="teamcontainer">
      <div className="Team">
        <button
          onClick={() => answerClickHandler("Team A")}
          value="Team A"
          disabled={state.isButtonDisabled}
        >
          {state.data.teamA?.map((champ, index) => (
            <Champions key={index} data={champ} />
          ))}
        </button>
      </div>
      <div className="vsicon">
        <div className="vsiconbackground">VS</div>
      </div>
      <div className="Team">
        <button
          onClick={() => answerClickHandler("Team B")}
          value="Team B"
          disabled={state.isButtonDisabled}
        >
          {state.data.teamB?.map((champ, index) => (
            <Champions key={index} data={champ} />
          ))}
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {state.isloading ? <Spinner /> : teamLoad}
      <div className="resultcontainer">
        <div className="resultbackground">
          <div className="result">
            <h2>Result : {state.answer}</h2>
            <button onClick={newTeamHandler}>Next</button>
          </div>
          <div>
            <h2 className="result">Score: {userState.user.gameScore}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;

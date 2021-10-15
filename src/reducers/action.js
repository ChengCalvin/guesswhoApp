import "./types";
import {
  GET_ERRORS,
  GET_CURRENT_USER,
  SET_CURRENT_USER,
  SET_USER_GAMESCORE,
  GET_USER_GAMESCORE,
} from "./types";

export const getErrorMessage = (errorMessage) => ({
  type: GET_ERRORS,
  errorMessage,
});

export const getUser = () => ({
  type: GET_CURRENT_USER,
});

export const setLoginStatus = (loginStatus, user) => ({
  type: SET_CURRENT_USER,
  loginStatus,
  user,
});

export const setUserGameScore = (gameScore) => ({
  type: SET_USER_GAMESCORE,
  gameScore,
});

export const getUserGameScore = () => ({
  type: GET_USER_GAMESCORE,
});

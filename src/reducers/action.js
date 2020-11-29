import "./types";
import { GET_ERRORS, GET_CURRENT_USER, SET_CURRENT_USER } from "./types";

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

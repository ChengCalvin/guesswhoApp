import "./types";
import { GET_ERRORS, GET_CURRENT_USER } from "./types";

export const signupError = (errorMessage) => ({
  type: GET_ERRORS,
  errorMessage,
});

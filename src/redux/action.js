import "./types";
import { GET_ERRORS } from "./types";

export const signupError = (errorMessage) => ({
  type: GET_ERRORS,
  errorMessage,
});

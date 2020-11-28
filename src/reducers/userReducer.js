import { GET_CURRENT_USER, GET_ERRORS } from "./types";
const initialState = {
  user: null,
  errorStatus: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        errorStatus: "error",
      };
    }
    case GET_CURRENT_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;

import { GET_CURRENT_USER, GET_ERRORS, SET_CURRENT_USER } from "./types";
const initialState = {
  user: {},
  errorStatus: null,
  loginStatus: false,
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
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        user: action.user,
        loginStatus: action.loginStatus,
      };
    }
    default:
      return state;
  }
};

export default userReducer;

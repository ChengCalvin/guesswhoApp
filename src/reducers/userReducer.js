const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ERROR": {
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    }
    default:
      return state;
  }
};

export default userReducer;

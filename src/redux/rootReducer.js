import combineReducers from "redux";

import user from "../redux/userReducer";

const rootReducer = combineReducers({ user });

export default rootReducer;

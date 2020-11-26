import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({ errors: errorReducer });

export default rootReducer;

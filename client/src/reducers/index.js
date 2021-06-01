import countReducer from "./counter";
import loggedReducer from "./isLogged";

import getReducer from "./get";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: countReducer,
  islogged: loggedReducer,
  get: getReducer,
});

export default allReducers;

import countReducer from "./counter";
import loggedReducer from "./islogged";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  counter: countReducer,
  isLogged: loggedReducer,
});
export default allReducers;

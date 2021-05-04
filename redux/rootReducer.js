import { combineReducers } from "redux";
import { userReducerName, userReducer } from "./usersSlice";

export default combineReducers({
  [userReducerName]: userReducer,
});

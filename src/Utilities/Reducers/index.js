import { combineReducers } from "redux";
import auth from "./AuthReducer";
import subscription from "./Subscription";

export default combineReducers({
  auth,
  subscription,
});

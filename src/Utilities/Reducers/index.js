import { combineReducers } from "redux";
import auth from "./AuthReducer";
import onDemand from "./OndemandReducer";

export default combineReducers({
  auth,
  onDemand,
});

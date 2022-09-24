import { combineReducers } from "redux";
import auth from "./AuthReducer";
import subscription from "./Subscription";
import onDemand from "./OndemandReducer";

export default combineReducers({
  auth,
  subscription,
  onDemand,
});

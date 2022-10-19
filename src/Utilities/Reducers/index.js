import { combineReducers } from "redux";
import auth from "./AuthReducer";
import subscription from "./Subscription";
import onDemand from "./OndemandReducer";
import profile from "./ProfileReducer";
import radio from "./RadioReducer";
import search from "./SearchReducer";

export default combineReducers({
  auth,
  subscription,
  onDemand,
  profile,
  radio,
  search,
});

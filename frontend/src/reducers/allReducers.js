import { combineReducers } from "redux";
import adminReducers from "./adminReducers";

const allReducers = combineReducers({
  admin: adminReducers,
});

export default allReducers;

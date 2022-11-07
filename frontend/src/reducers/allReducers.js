import { combineReducers } from "redux";
import rootReducers from "./rootReducers";
import adminReducers from "./adminReducers";

const allReducers = combineReducers({
  root: rootReducers,
  admin: adminReducers,
});

export default allReducers;

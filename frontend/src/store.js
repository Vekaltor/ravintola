import { createStore } from "redux";
import allReducers from "./reducers/allReducers";

export const store = createStore(allReducers);

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/allReducers";

export const store = createStore(allReducers, applyMiddleware(thunk));

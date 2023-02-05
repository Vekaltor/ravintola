import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./admin/features/authorization/authorizationSlice";
import dishesReducer from "./admin/features/dishes/dishesSlice";

const reducer = combineReducers({
  authorization: authorizationReducer,
  dishes: dishesReducer,
});

export default configureStore({ reducer });

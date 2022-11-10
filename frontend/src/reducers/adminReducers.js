import {
  FETCH_DISHES_BEGIN,
  FETCH_DISHES_SUCCESS,
  FETCH_DISHES_FAILURE,
  ADD_DISH,
  UPDATE_DISHES,
  UPDATE_FILTER_DISHES,
  UPDATE_CHECKED_DISHES,
  CHECKED_ALL_DISHES,
  UNCHECKED_ALL_DISHES,
} from "../actions/types";

const initialState = {
  dishes: [],
  filtersDishes: {
    phrase: "",
    category: "",
    recommended: "",
  },
  checkedDishes: [],
  loading: false,
  error: null,
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DISHES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DISHES_SUCCESS:
      return {
        ...state,
        dishes: action.payload.dishes,
        loading: false,
      };
    case FETCH_DISHES_FAILURE:
      return {
        ...state,
        dishes: [],
        loading: false,
        error: action.payload.error,
      };
    case ADD_DISH:
      return {
        ...state,
        filtersDishes: initialState.filtersDishes,
        dishes: action.payload.dishes,
      };
    case UPDATE_DISHES:
      return {
        ...state,
        dishes: action.payload.dishes,
      };
    case UPDATE_FILTER_DISHES:
      return {
        ...state,
        filtersDishes: action.payload.filters,
      };
    case UPDATE_CHECKED_DISHES:
      return {
        ...state,
        checkedDishes: action.payload.checkedDishes,
      };
    case CHECKED_ALL_DISHES:
      return {
        ...state,
        checkedDishes: [...state.dishes],
      };
    case UNCHECKED_ALL_DISHES:
      return {
        ...state,
        checkedDishes: [],
      };
    default:
      return { ...state };
  }
}

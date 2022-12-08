import {
  FETCH_DISHES_BEGIN,
  FETCH_DISHES_SUCCESS,
  FETCH_DISHES_FAILURE,
  CLEAR_DISHES,
  SET_ACTIVE_DISH,
  ADD_DISH,
  DELETE_DISH,
  MODIFY_DISH,
  UPDATE_FILTER_DISHES,
  UPDATE_CHECKED_DISHES,
  CHECKED_ALL_DISHES,
  UNCHECKED_ALL_DISHES,
} from "../actions/types";

const initialState = {
  dishes: [],
  activeDish: null,
  filtersDishes: {
    phrase: "",
    category: "",
    isRecommended: "",
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
    case CLEAR_DISHES:
      return initialState;
    case SET_ACTIVE_DISH:
      return {
        ...state,
        activeDish: action.payload.dish,
      };
    case ADD_DISH:
      return {
        ...state,
        dishes: initialState.dishes,
        filtersDishes: initialState.filtersDishes,
      };
    case DELETE_DISH:
      return {
        ...state,
        dishes: action.payload.dishes,
      };
    case MODIFY_DISH:
      let dishModified = action.payload.dishModified;
      let updateDishes = state.dishes.map((dish) => {
        if (dish.id === dishModified.id) return dishModified;
        return dish;
      });

      return {
        ...state,
        dishes: updateDishes,
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

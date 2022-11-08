import { pathToApi } from "../Components/PathToAPI";
import {
  FETCH_DISHES_BEGIN,
  FETCH_DISHES_SUCCESS,
  FETCH_DISHES_FAILURE,
  UPDATE_FILTER_DISHES,
  UPDATE_CHECKED_DISHES,
  CHECKED_ALL_DISHES,
  UNCHECKED_ALL_DISHES,
} from "./types";

export const fetchDishesBegin = () => ({
  type: FETCH_DISHES_BEGIN,
});

export const fetchDishesSuccess = (dishes) => ({
  type: FETCH_DISHES_SUCCESS,
  payload: { dishes },
});

export const fetchDishesFailure = (error) => ({
  type: FETCH_DISHES_FAILURE,
  payload: { error },
});

export const updateDishes = (dishes) => ({
  type: FETCH_DISHES_SUCCESS,
  payload: { dishes },
});

export const deleteDish = (dishes, dishToDelete) => {
  dishes = dishes.filter((dish) => dish.id !== dishToDelete.id);
  fetch(pathToApi + `api/menu/${dishToDelete.id}`, {
    method: "DELETE",
  }).catch((error) => console.log(error));
  return {
    type: FETCH_DISHES_SUCCESS,
    payload: { dishes },
  };
};

export const fetchDishes = () => (dispatch) => {
  dispatch(fetchDishesBegin());
  setTimeout(() => {
    fetch(pathToApi + "api/menu")
      .then((response) => response.json())
      .then(
        (dishes) => dispatch(fetchDishesSuccess(dishes)),
        (err) => dispatch(fetchDishesFailure(err))
      );
  }, 1000);
};

export const updateFilterDishes = (filters) => {
  return {
    type: UPDATE_FILTER_DISHES,
    payload: { filters },
  };
};

export const updateCheckedDishes = (checkedDishes) => {
  return {
    type: UPDATE_CHECKED_DISHES,
    payload: { checkedDishes },
  };
};

export const checkedAllDishes = () => {
  return {
    type: CHECKED_ALL_DISHES,
  };
};

export const uncheckedAllDishes = () => {
  return {
    type: UNCHECKED_ALL_DISHES,
  };
};

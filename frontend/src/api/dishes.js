import { pathToApi } from "./pathToAPI";

export const fetchAllDishes = () =>
  fetch(pathToApi + "menu").then(
    (response) => response.json(),
    (err) => err
  );

export const fetchAddDish = (dish) =>
  fetch(pathToApi + "menu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dish),
  }).catch((err) => console.log(err));

export const fetchDeleteDish = (dish) =>
  fetch(pathToApi + `menu/${dish.id}`, {
    method: "DELETE",
  }).catch((err) => console.log(err));

export const fetchModifyDish = (dishModified) =>
  fetch(pathToApi + `menu`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dishModified),
  }).catch((error) => console.log(error));

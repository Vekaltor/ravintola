import { pathToApi } from "./pathToAPI";

export const fetchAllReservations = () =>
  fetch(pathToApi + "reservation")
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Something went wrong");
    })
    .then((reservations) => reservations)
    .catch((error) => console.log(error));

export const fetchAllTables = () =>
  fetch(pathToApi + "seattable")
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Something went wrong");
    })
    .then((seattables) => seattables)
    .catch((error) => console.log(error));

export const fetchAddReservation = (reservation) =>
  fetch(pathToApi + "reservation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservation),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Something went wrong");
    })
    .catch((error) => error);

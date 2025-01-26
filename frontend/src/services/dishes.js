import {pathToApi} from "./pathToAPI";

export const fetchAllDishes = () =>
    fetch(pathToApi + "menu").then(
        (response) => response.json(),
        (err) => err
    );

export const fetchAddDish = (dish) => {
    const token = sessionStorage.getItem('jwtToken');
    return fetch(pathToApi + "menu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dish),
    }).catch((err) => console.log(err));
}

export const fetchDeleteDish = (dish) => {
    const token = sessionStorage.getItem('jwtToken');
    return fetch(pathToApi + `menu/${dish.id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).catch((err) => console.log(err));
}

export const fetchModifyDish = (dishModified) => {
    const token = sessionStorage.getItem('jwtToken');
    return fetch(pathToApi + `menu`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dishModified),
    }).catch((error) => console.log(error));
}


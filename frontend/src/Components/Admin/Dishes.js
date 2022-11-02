import { useState, useEffect } from "react";

import { pathToApi } from "../PathToAPI";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  const getData = () => {
    fetch(pathToApi + "api/menu")
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response.status);
      })
      .then((data) => setDishes(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (!dishes.length) getData();
  }, []);

  return (
    <div>
      <ul className="dishes">
        {dishes.map((dish) => (
          <li className="dish">
            <span>{dish.name}</span>
            {/* <span>{dish.description}</span> */}
            {/* <span>{dish.price} zł</span> */}
            {/* <span>{dish.recommended}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dishes;

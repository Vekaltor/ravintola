import { useState, useEffect } from "react";

import { pathToApi } from "../../PathToAPI";

import Dish from "./Dish";
import FilterDishes from "./FilterDishes";
import PrototypeDish from "./PrototypeDish";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);

  const getData = () => {
    fetch(pathToApi + "api/menu")
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response.status);
      })
      .then((data) => {
        setDishes(data);
        setFilteredDishes(data);
      })
      .catch((error) => console.log(error));
  };

  const applyFilters = (filteredDishes) => {
    setFilteredDishes(filteredDishes);
  };

  useEffect(() => {
    if (!dishes.length) getData();
  }, []);

  const jsxDishes = filteredDishes.map((dish) => (
    <li key={dish.id} className="dish">
      <Dish key={dish.id} dish={dish} />
    </li>
  ));

  return (
    <div className="box-dishes">
      <FilterDishes dishes={dishes} applyFilters={applyFilters} />
      <ul className="dishes">
        <PrototypeDish />
        {jsxDishes}
      </ul>
    </div>
  );
};

export default Dishes;

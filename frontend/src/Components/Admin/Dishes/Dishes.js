import { useState, useEffect } from "react";

import { pathToApi } from "../../PathToAPI";

import Dish from "./Dish";
import FilterDishes from "./FilterDishes";
import PrototypeDish from "./PrototypeDish";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);
  //FILTERS
  const [phrase, setPhrase] = useState();
  const [category, setCategory] = useState();
  const [recommended, setRecommended] = useState();
  const [filteredDishes, setFilteredDishes] = useState([]);

  const applyFilters = (filteredDishes) => {
    setFilteredDishes(filteredDishes);
  };

  const deleteDish = (idDishToDelete) => {
    const newListDishes = dishes.filter((dish) => dish.id !== idDishToDelete);
    setDishes(newListDishes);
    fetch(pathToApi + `api/menu/${idDishToDelete}`, {
      method: "DELETE",
    }).catch((error) => console.log(error));
  };

  const createJsxDishes = (dishes) => {
    if (isFilterOn()) dishes = intersection(dishes, filteredDishes);

    return dishes.map((dish) => (
      <li key={dish.id} className="dish">
        <Dish key={dish.id} dish={dish} deleteDish={deleteDish} />
      </li>
    ));
  };

  const isFilterOn = () => {
    return (phrase && phrase !== "") || category || recommended;
  };

  const intersection = (arrA, arrB) => {
    return arrA.filter((x) => arrB.includes(x));
  };

  const fetchDishes = () => {
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

  useEffect(() => {
    if (!dishes.length) fetchDishes();
  }, []);

  const jsxDishes = createJsxDishes(dishes);

  return (
    <div className="box-dishes">
      <FilterDishes
        dishes={dishes}
        applyFilters={applyFilters}
        phrase={phrase}
        category={category}
        recommended={recommended}
        setPhrase={setPhrase}
        setCategory={setCategory}
        setRecommended={setRecommended}
      />
      <ul className="dishes">
        <PrototypeDish />
        {jsxDishes}
      </ul>
    </div>
  );
};

export default Dishes;

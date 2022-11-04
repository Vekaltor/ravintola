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

  const [listChecked, setListChecked] = useState([]);

  const applyFilters = (filteredDishes) => {
    setFilteredDishes(filteredDishes);
  };

  const createJsxDishes = (dishesToMap) => {
    if (isFilterOn() || filteredDishes.length)
      dishesToMap = intersection(dishes, filteredDishes);

    return dishesToMap.map((dish) => (
      <li key={dish.id} className="dish">
        <Dish
          key={dish.id}
          dish={dish}
          dishes={dishes}
          listChecked={listChecked}
          setDishes={setDishes}
          setListChecked={setListChecked}
          setFilteredDishes={setFilteredDishes}
        />
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
  }, [dishes]);

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
        <PrototypeDish setListChecked={setListChecked} />
        {jsxDishes}
      </ul>
    </div>
  );
};

export default Dishes;

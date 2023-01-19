import React, { useEffect, useState } from "react";

import BoxCategoryMeal from "./BoxCategoryMeal";

import { categoryMeals } from "../../../data/categoryMeals";
import { fetchAllDishes } from "../../../api/dishes";

import "./Menu.css";
import InitialView from "../../components/InitialView";

function Menu() {
  const [data, setData] = useState([]);

  const getData = async () => {
    let fetchedDishes = await fetchAllDishes();
    setData(fetchedDishes);
  };

  const filterDishesByCategory = (dishes, category) => {
    return dishes.filter((dish) =>
      isCorrectlyCategory(dish.mealCategory, category)
    );
  };

  const isCorrectlyCategory = (categoryOfDish, category) => {
    return category.originalName === categoryOfDish;
  };

  const BoxCategoryMealComponents = categoryMeals.map((category, index) => (
    <BoxCategoryMeal
      key={index}
      category={category}
      dishes={filterDishesByCategory(data, category)}
    />
  ));

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <InitialView className="menu-start-view" title="nasze menu" />
      <div className="box-menu">
        {data.length ? BoxCategoryMealComponents : null}
      </div>
    </>
  );
}

export default Menu;

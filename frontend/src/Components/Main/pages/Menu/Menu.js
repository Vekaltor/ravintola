import React, { useEffect, useState } from "react";

import BoxCategoryMeal from "./BoxCategoryMeal";
import { categoryOrder } from "./Data";

import { pathToApi } from "../../../PathToAPI";

import "./Menu.css";

function Menu(props) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(pathToApi + "api/menu")
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response.status);
      })
      .then((data) => data.sort(compareCategoryMeals))
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  const compareCategoryMeals = (a, b) => {
    if (a.mealCategory > b.mealCategory) return -1;
    else if (a.mealCategory < b.mealCategory) return 1;
    else return 0;
  };

  useEffect(() => {
    if (!data.length) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="menu-start-view" onLoad={props.load()}>
        <div>
          <div className="decoration"></div>
          <div className="header-text">
            <h1>nasze menu</h1>
          </div>
          <div className="decoration"></div>
        </div>
      </div>
      <div className="box-menu">
        {categoryOrder.map((category, index) => (
          <BoxCategoryMeal key={index} category={category} dishes={data} />
        ))}
      </div>
    </>
  );
}

export default Menu;

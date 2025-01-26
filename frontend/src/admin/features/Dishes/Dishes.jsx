/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { connect, useDispatch, useSelector } from "react-redux";
import { fetchDishes, clearDishes } from "./dishesSlice";

import Product from "./product/Product";
import Dish from "./Dish";
import AddDishButton from "./AddDishButton";
import FilterDishes from "./FilterDishes";
import PrototypeDish from "./PrototypeDish";

import "./dishes.css";

const Dishes = () => {
  const { dishes, filtersDishes, loading, error } = useSelector(
    (state) => state.dishes
  );
  const [filteredDishes, setFilteredDishes] = useState([]);
  const { phrase, category, recommended } = filtersDishes;
  const dispatch = useDispatch();

  const applyFilters = (filteredDishes) => {
    setFilteredDishes(filteredDishes);
  };

  const isFilterOn = () => {
    return (
      (phrase && phrase !== "") ||
      (category && category !== "") ||
      (recommended && recommended !== "")
    );
  };

  const intersection = (arrA, arrB) => {
    if (arrB.length === 0) return arrA;
    if (arrA.toString() === arrB.toString()) return arrA;
    return arrA.filter((x) => arrB.includes(x));
  };

  const renderDishes = (dishesToMap) => {
    if (isFilterOn() || filteredDishes.length > 0)
      dishesToMap = intersection(dishes, filteredDishes);

    return dishesToMap.map((dish) => (
      <li key={dish.id} className="dish">
        <Dish
          key={dish.id}
          dish={dish}
          dishes={dishes}
          setFilteredDishes={setFilteredDishes}
        />
      </li>
    ));
  };

  const render = () => {
    if (loading === true)
      return (
        <div className="dishes-loading">
          <span className="container">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </span>
          <span className="text">ładowanie</span>
        </div>
      );
    else if (!error) return renderDishes(dishes);
  };

  const loadDishes = () => {
    dispatch(fetchDishes());
  };

  const disconnectDishes = () => {
    dispatch(clearDishes());
  };

  useEffect(() => {
    loadDishes();
    return () => {
      disconnectDishes();
    };
  }, []);

  return (
    <>
      <AddDishButton />
      <div className="box-dishes scrollbar">
        <FilterDishes applyFilters={applyFilters} />
        <ul className="dishes">
          <PrototypeDish />
          {render()}
        </ul>
      </div>
      <Routes>
        <Route element={<Product />} path=":id" />
      </Routes>
    </>
  );
};

const mapStateToProps = (state) => ({
  dishes: state.dishes,
});

const mapDispatchToProps = {
  fetchDishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);

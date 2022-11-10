/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import Dish from "./Dish";
import FilterDishes from "./FilterDishes";
import PrototypeDish from "./PrototypeDish";

import { fetchDishes } from "../../../actions/adminActions";
import { connect, useDispatch, useSelector } from "react-redux";
import AddDishButton from "./AddDishButton";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";

const Dishes = () => {
  const { dishes, filtersDishes, loading, error } = useSelector(
    (state) => state.admin
  );
  const [filteredDishes, setFilteredDishes] = useState(dishes);
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
    if (arrA.toString() === arrB.toString()) return arrA;
    return arrA.filter((x) => arrB.includes(x));
  };

  const renderDishes = (dishesToMap) => {
    if (isFilterOn() || filteredDishes.length)
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

  useEffect(() => {
    loadDishes();
  }, []);

  return (
    <>
      <div className="box-dishes">
        <AddDishButton />
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
  admin: state.admin,
});

const mapDispatchToProps = {
  fetchDishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);

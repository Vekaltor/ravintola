import { useState, useEffect } from "react";

import Dish from "./Dish";
import FilterDishes from "./FilterDishes";
import PrototypeDish from "./PrototypeDish";

import { fetchDishes } from "../../../actions/adminActions";
import { connect, useDispatch, useSelector } from "react-redux";

const Dishes = () => {
  const [filteredDishes, setFilteredDishes] = useState([]);
  const { dishes, filtersDishes, loading, error } = useSelector(
    (state) => state.admin
  );
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
      return <div className="dishes-loading">loading ...</div>;
    else if (!error) return renderDishes(dishes);
  };

  const loadDishes = () => {
    dispatch(fetchDishes());
  };

  useEffect(() => {
    loadDishes();
  }, []);

  return (
    <div className="box-dishes">
      <FilterDishes applyFilters={applyFilters} />
      <ul className="dishes">
        <PrototypeDish />
        {render()}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

const mapDispatchToProps = {
  fetchDishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);

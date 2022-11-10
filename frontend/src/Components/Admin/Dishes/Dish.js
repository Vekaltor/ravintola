import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  updateCheckedDishes,
  updateDishes,
} from "../../../actions/adminActions";

import Star from "./Star";
import SettingsDish from "./SettingsDish";

import src from "../../../img/food2_1920x1280.jpg";

const Dish = ({ dish }) => {
  const checkboxRef = useRef();
  const { id } = dish;
  const { dishes, checkedDishes } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const changeRecommended = (idDish) => {
    let changedListDishes = dishes.map((dish) => {
      if (dish.id === idDish) dish.recommended = !dish.recommended;
      return dish;
    });
    dispatch(updateDishes(changedListDishes));
  };

  const checkedDish = () => {
    let checkboxDish = checkboxRef.current;
    if (checkboxDish.checked) addCheckedDish(checkboxDish);
    else removeCheckedDish(checkboxDish);
  };

  const addCheckedDish = () => {
    let newListCheckedDishes = [...checkedDishes];
    newListCheckedDishes.push(dish);
    dispatch(updateCheckedDishes(newListCheckedDishes));
  };

  const removeCheckedDish = () => {
    let newListCheckedDishes = [...checkedDishes];
    let indexCheckedDishToDelete = findIndexDish(dish);
    newListCheckedDishes.splice(indexCheckedDishToDelete, 1);
    dispatch(updateCheckedDishes(newListCheckedDishes));
  };

  const findIndexDish = () => {
    return checkedDishes.findIndex((dishChecked) => dishChecked.id === id);
  };

  const handleClick = () => {
    changeRecommended(id);
  };

  return (
    <>
      <div className="checkbox">
        <input
          type="checkbox"
          data-dish-checkbox={id}
          ref={checkboxRef}
          onChange={checkedDish}
        />
      </div>
      <div className="image">
        <img src={process.env.PUBLIC_URL + src} alt={`img ${dish.name}`} />
      </div>
      <div className="name">{dish.name}</div>
      <div className="description">{dish.description}</div>
      <div className="recommended" onClick={handleClick}>
        <Star recommended={dish.recommended} />
      </div>
      <div className="price">{dish.price} zł</div>
      <SettingsDish dish={dish} />
    </>
  );
};

export default Dish;

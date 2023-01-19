import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { modifyDish, updateCheckedDishes } from "./dishesSlice";

import Star from "./Star";
import SettingsDish from "./SettingsDish";

import defaultImage from "../../../assets/img/food2_1920x1280.jpg";

const Dish = ({ dish }) => {
  const checkboxRef = useRef();
  const { id, image } = dish;
  const { dishes, checkedDishes } = useSelector((state) => state.dishes);
  const dispatch = useDispatch();

  const changeRecommended = (idModifiedDish) => {
    let dishModified = dishes.find((dish) => dish.id === idModifiedDish);
    dishModified = {
      ...dishModified,
      isRecommended: !dishModified.isRecommended,
    };
    dispatch(modifyDish(dishModified));
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

  const src = image ? image : process.env.PUBLIC_URL + defaultImage;

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
        <img src={src} alt={`img ${dish.name}`} />
      </div>
      <div className="name">{dish.name}</div>
      <div className="description">{dish.description}</div>
      <div className="recommended" onClick={handleClick}>
        <Star isRecommended={dish.isRecommended} />
      </div>
      <div className="price">{dish.price} zł</div>
      <SettingsDish dish={dish} />
    </>
  );
};

export default Dish;

import { useRef } from "react";

import Star from "./Star";
import SettingsDish from "./SettingsDish";

import src from "../../../img/food2_1920x1280.jpg";

const Dish = ({ dish, dishes, listChecked, setDishes, setListChecked }) => {
  const checkboxRef = useRef();
  const { id } = dish;

  const changeRecommended = (idDish) => {
    let modifiedListDishes = dishes.map((dish) => {
      if (dish.id === idDish) dish.recommended = !dish.recommended;
      return dish;
    });

    setDishes(modifiedListDishes);
  };

  const checkedDish = () => {
    let checkboxDish = checkboxRef.current;
    if (checkboxDish.checked) addCheckedDish(checkboxDish);
    else removeCheckedDish(checkboxDish);
  };

  const addCheckedDish = (checkboxDish) => {
    let newListChecked = [...listChecked];
    newListChecked.push(checkboxDish);
    setListChecked(newListChecked);
  };

  const removeCheckedDish = (checkboxDish) => {
    let newListChecked = [...listChecked];
    let indexCheckboxToDelete = findIndexCheckbox(checkboxDish);
    newListChecked.splice(indexCheckboxToDelete, 1);
    setListChecked(newListChecked);
  };

  const findIndexCheckbox = (checkboxDish) => {
    let idCheckboxDish = checkboxDish.dataset.dishCheckbox;
    let index = listChecked.findIndex(
      (elementChecked) => elementChecked.dataset.dishCheckbox === idCheckboxDish
    );
    return index;
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
        <img src={src} alt={`img ${dish.name}`} />
      </div>
      <div className="name">{dish.name}</div>
      <div className="description">{dish.description}</div>
      <div className="recommended" onClick={handleClick}>
        <Star recommended={dish.recommended} />
      </div>
      <div className="price">{dish.price} zł</div>
      <SettingsDish dish={dish} dishes={dishes} setDishes={setDishes} />
    </>
  );
};

export default Dish;

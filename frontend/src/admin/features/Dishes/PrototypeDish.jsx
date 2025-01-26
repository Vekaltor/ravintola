import { useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateCheckedDishes } from "./dishesSlice";

const PrototypeDish = () => {
  const checkboxRef = useRef();
  const dispatch = useDispatch();

  const { dishes } = useSelector((state) => state.dishes);

  const handleChange = () => {
    let prototypeCheckbox = checkboxRef.current;
    let checkboxesOfDishes = [...document.querySelectorAll("[data-id-dish]")];
    if (prototypeCheckbox.checked) selectAllDishes(checkboxesOfDishes);
    else unselectAllDishes(checkboxesOfDishes);
    swapChecked();
  };

  const swapChecked = () => {
    let checked = checkboxRef.current.checked;
    checkboxRef.current.checked = checked;
  };

  const selectAllDishes = (checkboxesOfDishes) => {
    checkboxesOfDishes.map((checkbox) => (checkbox.checked = true));
    dispatch(updateCheckedDishes(dishes));
  };

  const unselectAllDishes = (checkboxesOfDishes) => {
    checkboxesOfDishes.map((checkbox) => (checkbox.checked = false));
    dispatch(updateCheckedDishes([]));
  };

  return (
    <li className="dish prototype">
      <div className="checkbox">
        <input type="checkbox" onChange={handleChange} ref={checkboxRef} />
      </div>
      <div className="image">Zdjęcie</div>
      <div className="name">Nazwa</div>
      <div className="description">Opis</div>
      <div className="recommended">Rekomendowane</div>
      <div className="price">Cena</div>
      <div className="settings">Ustawienia</div>
    </li>
  );
};

export default PrototypeDish;

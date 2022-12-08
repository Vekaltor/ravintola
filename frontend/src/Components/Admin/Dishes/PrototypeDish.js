import { useRef } from "react";

import { useDispatch } from "react-redux";
import {
  checkedAllDishes,
  uncheckedAllDishes,
} from "../../../actions/adminActions";

const PrototypeDish = () => {
  const checkboxRef = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    let checked = checkboxRef.current.checked;
    if (checked) selectAllDishes();
    else unselectAllDishes();
    swapChecked();
  };

  const swapChecked = () => {
    let checked = checkboxRef.current.checked;
    checkboxRef.current.checked = checked;
  };

  const selectAllDishes = () => {
    let dishesCheckbox = [...document.querySelectorAll("[data-dish-checkbox]")];
    dishesCheckbox.map((dishCheckbox) => (dishCheckbox.checked = true));
    dispatch(checkedAllDishes());
  };

  const unselectAllDishes = () => {
    let dishesCheckbox = [...document.querySelectorAll("[data-dish-checkbox]")];
    dishesCheckbox.map((dishCheckbox) => (dishCheckbox.checked = false));
    dispatch(uncheckedAllDishes());
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

import { useState, useEffect } from "react";

import { pathToApi } from "../../PathToAPI";

import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

import src from "../../../img/food2_1920x1280.jpg";
import Star from "./Star";

const Dishes = () => {
  const [dishes, setDishes] = useState([]);

  const getData = () => {
    fetch(pathToApi + "api/menu")
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response.status);
      })
      .then((data) => setDishes(data))
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!dishes.length) getData();
  }, []);

  return (
    <div className="box-dishes">
      <div className="dishes-search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="search" placeholder="Wyszukaj danie" />
          <div className="select-wrapper">
            <select className="categories">
              <option>Kategorie</option>
              <option>dada</option>
              <option>435345</option>
              <option>ghfhfg</option>
              <option>f34f43ef</option>
            </select>
            <span className="arrow">
              <RiArrowDropDownLine />
            </span>
          </div>
          <div className="select-wrapper">
            <select className="recommended">
              <option>Rekomendowane</option>
              <option>dada</option>
              <option>435345</option>
              <option>ghfhfg</option>
              <option>f34f43ef</option>
            </select>
            <span className="arrow">
              <RiArrowDropDownLine />
            </span>
          </div>
          <button type="submit" className="button-search">
            <BiSearch />
          </button>
        </form>
      </div>
      <ul className="dishes">
        <li className="dish prototype">
          <div className="checkbox">
            <input type="checkbox" />
          </div>
          <div className="image"></div>
          <div className="name">Nazwa</div>
          <div className="description">Opis</div>
          <div className="recommended">Rekomendowane</div>
          <div className="price">Cena</div>
          <div className="settings">Ustawienia</div>
        </li>
        {dishes.map((dish, index) => (
          <li key={index} className="dish">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="image">
              <img src={src} alt={`img ${dish.name}`} />
            </div>
            <div className="name">{dish.name}</div>
            <div className="description">{dish.description}</div>
            <div className="recommended">
              <Star recommended={dish.recommended} />
            </div>
            <div className="price">{dish.price} zł</div>
            <div className="settings">x</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dishes;

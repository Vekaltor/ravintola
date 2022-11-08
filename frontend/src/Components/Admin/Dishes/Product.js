import { useLocation, useNavigate } from "react-router-dom";

import { BiExit } from "react-icons/bi";

import srcImg from "../../../img/recommended_food2_1920_1271.jpg";

const Product = () => {
  const location = useLocation();
  const { dish } = location.state;

  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  };

  return (
    <div className="dish-detail-box">
      <div className="top">
        <h2>Szczegółowe informacje</h2>
        <div className="image">
          <img src={srcImg} alt={dish.name} />
          <span className="name">{dish.name}</span>
        </div>
      </div>
      <div className="bottom">
        <div className="dish-info">
          <div className="header">Informacje</div>
          <div className="list">
            <span>
              <span>Cena</span>
              <span>{dish.price} zł</span>
            </span>
            <span>
              <span>Kategoria dania</span>
              <span>{dish.mealCategory}</span>
            </span>
            <span>
              <span>Polecane</span>
              <span className="recommended-block">
                {dish.recommended ? "tak" : "nie"}
              </span>
            </span>
            <span>
              <span>Gramatura</span> <span>{dish.weight} g</span>
            </span>
            <span>
              <span>Identyfikator</span>
              <span>{dish.id}</span>
            </span>
          </div>
          <div className="buttons">
            <button className="edit button">Edycja</button>
            <button className="delete button">Usuń</button>
          </div>
        </div>
        <div className="dish-more-info">
          <div className="header">Opis</div>
          <span className="description">{dish.description}</span>
          <div className="button">
            <span onClick={goToBack}>
              <BiExit />
              Cofnij
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

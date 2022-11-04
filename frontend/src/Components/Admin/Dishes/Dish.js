import Star from "./Star";

import src from "../../../img/food2_1920x1280.jpg";
import SettingsDish from "./SettingsDish";

const Dish = ({ dish, deleteDish }) => {
  return (
    <>
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
      <SettingsDish dish={dish} deleteDish={deleteDish} />
    </>
  );
};

export default Dish;

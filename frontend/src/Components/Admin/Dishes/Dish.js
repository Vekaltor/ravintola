import Star from "./Star";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import src from "../../../img/food2_1920x1280.jpg";

const Dish = ({ dish }) => {
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
      <div className="settings">
        <span className="more-info">
          <BsBoxArrowInUpRight />
        </span>
        <span className="delete">
          <RiDeleteBin5Fill />
        </span>
      </div>
    </>
  );
};

export default Dish;

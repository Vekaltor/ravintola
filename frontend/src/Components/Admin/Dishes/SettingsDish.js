import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setActiveDish } from "../../../actions/adminActions";

import PopupDelete from "./PopupDelete";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const SettingsDish = ({ dish }) => {
  const [activePopup, setActivePopup] = useState(false);
  const { name } = dish;
  const { activeDish } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const nameDishURL = name.toLowerCase();

  const goToDish = () => {
    dispatch(setActiveDish(dish));
    setActivePopup(false);
    const extraParams = {
      state: {
        dish,
      },
    };
    navigate(`${nameDishURL}`, extraParams);
  };

  const handleClick = (valueState) => {
    setActivePopup(false);
    dispatch(setActiveDish(dish));
    setActivePopup((prevState) => (prevState = valueState));
  };

  const componentPopupDelete =
    activeDish === dish ? (
      <PopupDelete
        id={dish.id}
        className="dish "
        click={handleClick}
        animationDelay={300}
      />
    ) : null;

  return (
    <div className="settings">
      <span className="more-info" onClick={goToDish}>
        <BsBoxArrowInUpRight />
      </span>
      <span className="delete" onClick={handleClick}>
        <RiDeleteBin5Fill />
      </span>
      {activePopup ? componentPopupDelete : null}
    </div>
  );
};

export default SettingsDish;

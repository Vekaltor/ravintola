import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PopupDelete from "./addDish/PopupDelete";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const SettingsDish = ({ dish }) => {
  const [activePopup, setActivePopup] = useState(false);
  const { name } = dish;

  const navigate = useNavigate();

  const nameDishURL = name.toLowerCase();

  const goToDish = () => {
    const extraParams = {
      state: {
        dish,
      },
    };
    navigate(`${nameDishURL}`, extraParams);
  };

  const handleClick = () => {
    setActivePopup((prevState) => !prevState);
  };

  const componentPopupDelete = activePopup ? (
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
      {componentPopupDelete}
    </div>
  );
};

export default SettingsDish;

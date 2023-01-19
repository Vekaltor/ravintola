import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { deleteDish } from "../dishesSlice";

import image from "../../../../assets/img/trash.png";

const PopupDelete = ({ id, info, className, click, animationDelay = 1000 }) => {
  const popupRef = useRef();
  const { dishes } = useSelector((state) => state.dishes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isFromComponentDetails = location.state;

  const handleDeleteDish = () => {
    let idDishToDelete = id;
    const dishToDelete = dishes.find((dish) => dish.id === idDishToDelete);
    dispatch(deleteDish(dishToDelete));
  };

  const exitPopup = () => {
    click({
      isActivePopup: false,
    });
  };

  const handleClickConfirm = () => {
    popupRef.current.classList.add("inprogress");
    setTimeout(() => {
      popupRef.current.classList.remove("inprogress");
      setTimeout(() => {
        handleDeleteDish();
        click({
          isActivePopup: false,
        });
        if (isFromComponentDetails) navigate(-1);
      }, animationDelay / 5);
    }, animationDelay);
  };

  const handleClickCancel = () => {
    exitPopup();
  };

  return (
    <>
      <div className={`${className} backdrop-popup`}></div>
      <div className={`${className} popup-delete`} ref={popupRef}>
        <div className="image">
          <img src={image} alt="trash" />
        </div>
        <div className="content">
          <span className="title">Usunąć produkt?</span>
          {info ? <span className="info">{info}</span> : null}
          <div className="buttons">
            <button className="cancel" onClick={handleClickCancel}>
              Anuluj
            </button>
            <button className="confirm" onClick={handleClickConfirm}>
              Usuń
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupDelete;

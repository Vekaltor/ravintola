import { useLayoutEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiImageEditFill } from "react-icons/ri";

import "./editProduct.css";
import {useDispatch} from "react-redux";
import {modifyDishAsync} from "../../dishesSlice";

const EditProduct = ({ dish, click }) => {
  const [editedDish, setEditedDish] = useState(dish);
  const dispatch = useDispatch();
  const behindEditRef = useRef();
  const boxEditRef = useRef();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setEditedDish((prevDish) => ({
      ...prevDish,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveChanges = () => {
    dispatch(modifyDishAsync(editedDish))
        .then(() => {
          click({
            isActivePopup: false,
            isActiveEditForm: false,
          });
        })
        .catch((err) => {
          console.error("Błąd zapisu:", err);
        });
  };

  const handleClickExit = () => {
    behindEditRef.current.classList.add("closed");
    boxEditRef.current.classList.add("closed");
    setTimeout(() => {
      click({
        isActivePopup: false,
        isActiveEditForm: false,
      });
    }, 700);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      behindEditRef.current.classList.add("active");
      boxEditRef.current.classList.add("active");
    }, 1);
  }, []);

  return (
      <>
        <div className="behind-edit-dish" ref={behindEditRef}></div>
        <div className="edit-dish" ref={boxEditRef}>
        <span className="header">
          <span className="title">Edytowanie</span>
          <span className="id-info">identyfikator: {editedDish.id}</span>
        </span>

          <form>
            <div className="edit-form">
              <div className="left">
                <div className="image element-form">
                <span className="icon-edit">
                  <input type="file" />
                  <RiImageEditFill />
                </span>
                  <img
                      src={process.env.PUBLIC_URL + editedDish.image}
                      alt={editedDish.name}
                  />
                </div>

                <div className="element-form">
                  <label htmlFor="description">Opis</label>
                  <textarea
                      id="description"
                      placeholder="Wpisz opis dania"
                      value={editedDish.description}
                      onChange={handleChange}
                  />
                </div>
              </div>

              <div className="right">
                <div className="element-form">
                  <label htmlFor="name">Nazwa</label>
                  <input
                      type="text"
                      value={editedDish.name}
                      id="name"
                      placeholder="Wpisz nazwę dania"
                      onChange={handleChange}
                  />
                </div>

                <div className="element-form">
                  <label htmlFor="weight">Gramatura</label>
                  <input
                      type="text"
                      value={editedDish.weight}
                      id="weight"
                      placeholder="Podaj gramaturę dania"
                      onChange={handleChange}
                  />
                </div>

                <div className="element-form">
                  <label htmlFor="price">Cena</label>
                  <input
                      type="text"
                      value={editedDish.price}
                      id="price"
                      placeholder="Podaj cenę dania"
                      onChange={handleChange}
                  />
                </div>

                <div className="element-form switch">
                  <label htmlFor="isRecommended">Rekomendacja</label>
                  <input
                      type="checkbox"
                      id="isRecommended"
                      checked={editedDish.isRecommended}
                      onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </div>
                <div
                    style={{
                     width:"100%",
                      marginTop:"20px",
                      cursor:"pointer"
                    }}
                >
                  <button
                      className="save"
                      type="button" onClick={handleSaveChanges}>
                    Zapisz
                  </button>
                </div>
              </div>
            </div>
          </form>
          <button className="exit" onClick={handleClickExit}>
            <IoIosClose />
          </button>
        </div>
      </>
  );
};

export default EditProduct;

import { useLayoutEffect, useRef } from "react";

import { IoIosClose } from "react-icons/io";
import { RiImageEditFill } from "react-icons/ri";

import "./editProduct.css";

const EditProduct = ({ dish, click }) => {
  const {
    id,
    name,
    // categoryMeal,
    weight,
    price,
    isRecommended,
    description,
    image,
  } = dish;

  const behindEditRef = useRef();
  const boxEditRef = useRef();

  const scrollToTop = () => {
    behindEditRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const loadAnimations = () => {
    setTimeout(() => {
      behindEditRef.current.classList.add("active");
      boxEditRef.current.classList.add("active");
    }, 1);
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
    loadAnimations();
  }, []);

  return (
    <>
      <div className="behind-edit-dish" ref={behindEditRef}></div>
      <div className="edit-dish" ref={boxEditRef} onLoad={scrollToTop}>
        <span className="header">
          <span className="title">Edytowanie</span>
          <span className="id-info">identyfikator: {id}</span>
        </span>

        <form>
          <div className="edit-form">
            <div className="left">
              <div className="image element-form">
                <span className="icon-edit">
                  <input type="file" />
                  <RiImageEditFill />
                </span>
                <img src={process.env.PUBLIC_URL + image} alt={name} />
              </div>

              <div className="element-form">
                <label htmlFor="description">Opis</label>
                <textarea id="description" placeholder="Wpisz opis dania">
                  {description}
                </textarea>
              </div>
            </div>

            <div className="right">
              <div className="element-form">
                <label htmlFor="name">Nazwa</label>
                <input
                  type="text"
                  value={name}
                  id="name"
                  placeholder="Wpisz nazwe dania"
                />
              </div>

              <div className="element-form">
                <label htmlFor="weight">Gramatura</label>
                <input
                  type="text"
                  value={weight}
                  id="weight"
                  placeholder="Podaj gramature dania"
                />
              </div>

              <div className="element-form">
                <label htmlFor="price">Cena</label>
                <input
                  type="text"
                  value={price}
                  id="price"
                  placeholder="Podaj cene dania"
                />
              </div>

              <div className="element-form select">
                <label htmlFor="categoryMeal">Kategoria</label>
                <input
                  type="text"
                  value={price}
                  id="categoryMeal"
                  placeholder="Wybierz kategorie"
                />
              </div>

              <div className="element-form switch">
                <label htmlFor="isRecommended">Rekomendacja</label>
                <input
                  // ref={switchRef}
                  type="checkbox"
                  id="isRecommended"
                  checked={isRecommended}
                  // onChange={changeDetail}
                />
                <span className="slider round"></span>
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

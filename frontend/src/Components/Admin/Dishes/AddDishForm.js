import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import testSRC from "../../../img/king_prawns_640x966.jpg";
import AddDishMessage from "./AddDishMessage";

const AddDishForm = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  let message =
    "Well done! You successfully read this important alert message.";

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setClick(true);
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  };
  console.log(click);

  return (
    <div className="box-form-add-dish">
      {!click ? <Outlet /> : <AddDishMessage message={message} />}
      <div className="form-add-dish">
        <form onSubmit={handleSubmit}>
          <div className="main-form section-form">
            <div className="header">Formularz dodawania produktu</div>
            <div className="content-form">
              <label>
                Nazwa Produktu
                <input type="text" />
              </label>
              <label>
                Wybierz Kategorie
                <select>
                  <option value="">Ryby</option>
                  <option value="">Napoje</option>
                  <option value="">Desery</option>
                  <option value="">Sałatki</option>
                </select>
              </label>
              <label>
                Waluta
                <select>
                  <option value="PLN">PLN</option>
                  <option value="EURO">EURO</option>
                  <option value="USD">USD</option>
                </select>
              </label>
              <label>
                Gramatura
                <input type="text" />
              </label>
              <label>
                Cena
                <input type="text" />
              </label>
              <label>
                Opis
                <textarea placeholder="Wiadomość"></textarea>
              </label>
              <label>
                Zdjęcie produktu
                <input
                  type="file"
                  placeholder="Dodaj zdjęcie..."
                  className="uploaded-image"
                />
              </label>
            </div>
          </div>
          <div className="second-form section-form">
            <div className="header">Produkt</div>
            <div className="image">
              <img src={testSRC} alt="added img" />
            </div>
            <div className="other-settings">
              <span>Rekomendacja</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="buttons">
              <button onClick={handleClick}>Dodaj produkt</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDishForm;

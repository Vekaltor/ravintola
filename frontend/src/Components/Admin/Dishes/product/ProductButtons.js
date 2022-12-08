import PopupDelete from "../PopupDelete";

import { useState } from "react";
import ButtonProviderToEdit from "./ButtonProviderToEdit";
import EditProduct from "./edit/EditProduct";
import ButtonProviderToDelete from "./ButtonProviderToDelete";

const ProductButtons = ({ dish }) => {
  const [activeComponents, setActiveComponents] = useState({
    isActivePopup: false,
    isActiveEditForm: false,
  });

  const handleClick = (valueState) => {
    setActiveComponents((prevState) => ({
      ...prevState,
      ...valueState,
    }));
  };

  const componentPopupDelete = activeComponents.isActivePopup ? (
    <PopupDelete
      id={dish.id}
      info="Usunięcie tego produktu spowoduje nieodwracalne zmiany."
      className="product "
      click={handleClick}
    />
  ) : null;

  const componentEditForm = activeComponents.isActiveEditForm ? (
    <EditProduct dish={dish} click={handleClick} />
  ) : null;

  return (
    <div className="buttons">
      <ButtonProviderToEdit click={handleClick} />
      <ButtonProviderToDelete click={handleClick} />
      {componentPopupDelete}
      {componentEditForm}
    </div>
  );
};

export default ProductButtons;

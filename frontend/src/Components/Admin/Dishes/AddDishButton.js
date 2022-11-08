import { useNavigate } from "react-router-dom";

const AddDishButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admin/dania/dodawanie");
  };

  return (
    <div className="box-button-add-dish">
      <button className="button-add-dish" onClick={handleClick}>
        Dodaj
      </button>
    </div>
  );
};

export default AddDishButton;

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteDish } from "../../../actions/adminActions";

const ProductButtons = ({ dish }) => {
  const { dishes } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteDish = () => {
    dispatch(deleteDish(dishes, dish));
    navigate(-1);
  };

  return (
    <div className="buttons">
      <button className="edit button">Edycja</button>
      <button className="delete button" onClick={handleDeleteDish}>
        Usuń
      </button>
    </div>
  );
};

export default ProductButtons;

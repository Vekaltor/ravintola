import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../../actions/rootActions";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(logoutAdmin());
    navigate("/");
  }

  return (
    <div className="logout-button" onClick={handleClick}>
      <span>Tak, wyloguj</span>
    </div>
  );
};

export default LogoutButton;

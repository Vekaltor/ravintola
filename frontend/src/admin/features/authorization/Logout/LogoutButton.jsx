import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../authorizationSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <div className="logout-button" onClick={handleClick}>
      <span>Tak, wyloguj</span>
    </div>
  );
};

export default LogoutButton;

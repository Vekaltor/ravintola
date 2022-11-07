import { useNavigate } from "react-router-dom";

import { logoutAdmin } from "../../../actions/rootActions";
import { useDispatch } from "react-redux";

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

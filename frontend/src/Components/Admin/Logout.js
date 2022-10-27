import { MdLogout } from "react-icons/md";

import { logoutAdmin } from "../../actions/adminActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(logoutAdmin());
    navigate("/");
  }

  return (
    <div className="logout" onClick={handleClick}>
      <span className="icon">
        <MdLogout />
      </span>
      <span className="text">Wyloguj</span>
    </div>
  );
}

export default Logout;

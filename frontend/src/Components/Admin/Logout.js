import { MdLogout } from "react-icons/md";

function Logout() {
  return (
    <div className="logout">
      <span className="icon">
        <MdLogout />
      </span>
      <span className="text">Wyloguj</span>
    </div>
  );
}

export default Logout;

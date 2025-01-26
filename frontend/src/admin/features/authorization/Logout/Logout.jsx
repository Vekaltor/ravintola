import { useState } from "react";

import LogoutPopup from "./LogoutPopup";

import { MdLogout } from "react-icons/md";

import "./logout.css";

function Logout() {
  const [isClicked, setIsClicked] = useState(false);

  function showLogoutPopup() {
    setIsClicked(true);
  }

  function hideLogoutPopup() {
    setIsClicked(false);
  }

  const componentLogoutPopup = isClicked ? (
    <LogoutPopup hideLogoutPopup={hideLogoutPopup} />
  ) : null;

  return (
    <>
      <div className="logout-sidebar" onClick={showLogoutPopup}>
        <span className="icon">
          <MdLogout />
        </span>
        <span className="text">Wyloguj</span>
      </div>
      {componentLogoutPopup}
    </>
  );
}

export default Logout;

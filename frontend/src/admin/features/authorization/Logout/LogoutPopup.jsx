import CancelButton from "./CancelButton";
import LogoutButton from "./LogoutButton";

const LogoutPopup = (props) => {
  function handleClick() {
    props.hideLogoutPopup();
  }

  return (
    <div className="bg-logout-popup">
      <div className="logout-popup">
        <span className="question">Czy napewno chcesz się wylogować ?</span>
        <LogoutButton />
        <CancelButton click={handleClick} />
      </div>
    </div>
  );
};

export default LogoutPopup;

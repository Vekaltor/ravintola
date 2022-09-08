import { NavLink } from "react-router-dom";

function ButtonReservation(props) {
  return (
    <>
      <NavLink to="/reservation">
        <div>
          <button>{props.text}</button>
          <div></div>
        </div>
      </NavLink>
    </>
  );
}
export default ButtonReservation;

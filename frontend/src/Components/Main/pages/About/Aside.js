import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside>
      <div className="option-for-user">
        <span>
          Przejrzyj nasze
          <NavLink to="/menu">
            <span>menu</span>
          </NavLink>
          oraz
          <NavLink to="/reservation">
            <span>zarezerwuj</span>
          </NavLink>
          stolik już teraz !
        </span>
      </div>
    </aside>
  );
}

export default Aside;

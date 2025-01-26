import { NavLink } from "react-router-dom";

import { navGuest } from "../../../data/navigations";

function NavList(props) {
  const NavElements = navGuest.map((item, index) => (
    <li key={index}>
      <NavLink to={item.path}>
        <span onClick={props.click}>{item.title}</span>
      </NavLink>
    </li>
  ));

  return <ul className="wrapperOptions">{NavElements}</ul>;
}

export default NavList;

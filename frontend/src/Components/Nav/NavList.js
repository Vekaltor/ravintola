import { NavLink } from "react-router-dom";
import { data } from "./DataListMenu.js";

function NavList(props) {
  return (
    <ul className="wrapperOptions">
      {data.map((item, index) => {
        return (
          <li key={index}>
            <NavLink to={item.path}>
              <span onClick={props.click}>{item.title}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default NavList;

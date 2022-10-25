import { NavLink } from "react-router-dom";

import { menuSideBar } from "./data/sidebarData";

function Sidebar() {
  function jsxLinksCategory(links) {
    return links.map((link) => (
      <li className="nav-item">
        <NavLink to={link.pathname}>
          <span className="nav-icon">{link.Icon}</span>
          <span className="item-text">{link.name}</span>
        </NavLink>
      </li>
    ));
  }

  function jsxCategoriesMenu(menu) {
    return menu.map((item) => (
      <div className="category">
        <span className="category-title">{item.categoryTitle}</span>
        {jsxLinksCategory(item.links)}
      </div>
    ));
  }

  const jsxMenuSideBar = (
    <ul className="sidebar-nav">{jsxCategoriesMenu(menuSideBar)}</ul>
  );

  return (
    <aside>
      <nav>
        <div className="sidebar">
          <span className="head-text">ravadmin</span>
          {jsxMenuSideBar}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;

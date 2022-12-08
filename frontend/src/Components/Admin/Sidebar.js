import { NavLink } from "react-router-dom";

import { menuSideBar } from "./data/sidebarData";
import Logout from "./Logout/Logout";

function Sidebar({ activeSideBar, setActiveSideBar }) {
  function jsxLinksCategory(links) {
    return links.map((link, index) => (
      <li key={index} className="nav-item" onClick={hideSideBar}>
        <NavLink to={link.pathname} end={link.pathname ? false : true}>
          <span className="nav-icon">{link.Icon}</span>
          <span className="item-text">{link.name}</span>
        </NavLink>
      </li>
    ));
  }

  function hideSideBar() {
    setActiveSideBar();
  }

  function jsxCategoriesMenu(menu) {
    return menu.map((item, index) => (
      <div key={index} className="category-menu">
        <span className="category-title">{item.categoryTitle}</span>
        {jsxLinksCategory(item.links)}
      </div>
    ));
  }

  const stylesSideBar = activeSideBar ? "sidebar active" : "sidebar";

  const jsxMenuSideBar = (
    <ul className="sidebar-nav">
      {jsxCategoriesMenu(menuSideBar)}
      <Logout />
    </ul>
  );

  return (
    <aside>
      <nav>
        <div className={stylesSideBar}>
          <div>
            <span className="head-text">ravadmin</span>
          </div>
          {jsxMenuSideBar}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;

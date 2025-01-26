import React, { useState } from "react";

import NavList from "./NavList";
import ButtonNav from "./ButtonNav";
import NavIcons from "./NavIcons";

import "./Nav.css";

const Nav = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);

  const handleToggleNav = () => {
    if (!isActiveNav) disableScroll();
    else enableScroll();
    setIsActiveNav(!isActiveNav);
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.querySelector("main").style.pointerEvents = "none";
    document.querySelector("footer").style.pointerEvents = "none";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
    document.querySelector("main").style.pointerEvents = "all";
    document.querySelector("footer").style.pointerEvents = "all";
  };

  return (
    <>
      <div className={isActiveNav ? "bluredBlock active" : "bluredBlock"}></div>
      <div>
        <ButtonNav isActive={isActiveNav} click={handleToggleNav.bind(this)} />
      </div>
      <nav>
        <div className={isActiveNav ? "nav active" : "nav"}>
          <div></div>

          <NavList click={handleToggleNav} />

          <div className="icons">
            <NavIcons />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

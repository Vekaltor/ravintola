import React, { Component } from "react";

import Logo from "./Logo";

import "./Header.css";

class Header extends Component {
  state = {};

  handleDisableMenu() {
    const buttonNav = document.querySelector(".buttonNav");
    const nav = document.querySelector(".nav");
    const bluredBlock = document.querySelector(".bluredBlock");
    if (buttonNav.classList.contains("active")) {
      buttonNav.classList.remove("active");
      nav.classList.remove("active");
      bluredBlock.classList.remove("active");
      this.enableScroll();
    }
  }

  enableScroll() {
    document.body.style.overflow = "auto";
    document.querySelector("main").style.pointerEvents = "all";
    document.querySelector("footer").style.pointerEvents = "all";
  }

  render() {
    return (
      <>
        <header>
          <div className="mainHeader">
            <div className="top">
              <div className="wrapper">
                <Logo handleDisableMenu={this.handleDisableMenu.bind(this)} />
                <h1 className="nameLogo">ravintola</h1>
                <div></div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;

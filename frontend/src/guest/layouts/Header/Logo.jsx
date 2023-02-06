import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import srcLogo from "../../../assets/img/logo_1050x610.png";

class Logo extends Component {
  state = {};

  render() {
    return (
      <>
        <NavLink to="/">
          <div className="imgLogo">
            <img
              onClick={this.props.handleDisableMenu}
              src={srcLogo}
              alt="logo"
            />
          </div>
        </NavLink>
      </>
    );
  }
}

export default Logo;

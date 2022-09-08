import React, { Component } from "react";
import srcLogo from "../../img/logo.png";

import { NavLink } from "react-router-dom";

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

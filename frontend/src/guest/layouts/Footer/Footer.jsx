import React, { Component } from "react";

import CopyRight from "./Copyright";
import LeftBar from "./LeftBar";
import MiddleBar from "./MiddleBar";
import RightBar from "./RightBar";

import "./Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer-content">
            <LeftBar />
            <MiddleBar />
            <RightBar />
          </div>
          <CopyRight />
        </div>
      </footer>
    );
  }
}

export default Footer;

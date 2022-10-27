import React, { Component } from "react";
import Content from "./Content";
import Topbar from "./Topbar";

import "./panelAdmin.css";
import Sidebar from "./Sidebar";

class PanelAdmin extends Component {
  state = {};

  render() {
    return (
      <div className="page-admin">
        <Topbar />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default PanelAdmin;

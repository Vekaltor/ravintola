import React, { Component } from "react";
import Content from "./Content";
import Topbar from "./Topbar";

import "./panelAdmin.css";
import Sidebar from "./Sidebar";

class PanelAdmin extends Component {
  state = {
    activeTopBar: false,
    activeSideBar: false,
  };

  setActiveTopBar() {
    this.setState((prevState) => ({
      activeTopBar: !prevState.activeTopBar,
      activeSideBar: false,
    }));
  }

  setActiveSideBar() {
    this.setState((prevState) => ({
      activeTopBar: false,
      activeSideBar: !prevState.activeSideBar,
    }));
  }

  hideSideBar(e) {
    if (e.target.className === "btn-side-bar") return;
    this.setState({
      activeSideBar: false,
    });
  }

  render() {
    return (
      <div className="page-admin">
        <div>
          <Sidebar
            activeSideBar={this.state.activeSideBar}
            setActiveSideBar={this.setActiveSideBar.bind(this)}
          />
        </div>
        <div onClick={this.hideSideBar.bind(this)}>
          <Topbar
            activeTopBar={this.state.activeTopBar}
            setActiveSideBar={this.setActiveSideBar.bind(this)}
            setActiveTopBar={this.setActiveTopBar.bind(this)}
          />
          <Content />
        </div>
      </div>
    );
  }
}

export default PanelAdmin;

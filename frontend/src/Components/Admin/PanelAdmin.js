import React, { Component } from "react";
import Content from "./Content";

import "./panelAdmin.css";
import SearchForm from "./SearchForm";
import Sidebar from "./Sidebar";

class PanelAdmin extends Component {
  state = {};
  render() {
    return (
      <div className="page-admin">
        <SearchForm />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default PanelAdmin;

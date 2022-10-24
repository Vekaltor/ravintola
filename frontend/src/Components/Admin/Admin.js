import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import PanelAdmin from "./PanelAdmin";
import PrivateRoutes from "./PrivateRoutes";
import Products from "./Products";

class Admin extends Component {
  state = {};
  render() {
    return (
      <div className="page-admin">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<PanelAdmin />} index />
            <Route element={<Products />} path="products" />
          </Route>
          <Route element={<Login />} path="login" />
        </Routes>
      </div>
    );
  }
}

export default Admin;

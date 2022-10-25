import React from "react";

import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { loggingAdmin, logoutAdmin } from "../../actions/adminActions";

import Login from "./Login";
import PanelAdmin from "./PanelAdmin";
import PrivateRoutes from "./PrivateRoutes";
import Products from "./Products";

import { useSelector } from "react-redux";

const Admin = () => {
  const { auth } = useSelector((state) => state.admin);
  return (
    <div className="page-admin d-flex">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<PanelAdmin />} index />
          <Route element={<Products />} path="products" />
        </Route>
        <Route element={<Login />} path="login" />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

const mapDispatchToProps = {
  loggingAdmin,
  logoutAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

import React from "react";

import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { loggingAdmin, logoutAdmin } from "../../actions/adminActions";

import Login from "./Login";
import PanelAdmin from "./PanelAdmin";
import PrivateRoute from "./PrivateRoute";

const Admin = () => {
  return (
    <div className="page-admin">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/*" element={<PanelAdmin />} />
        </Route>
        <Route element={<Login />} path="/logowanie" />
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

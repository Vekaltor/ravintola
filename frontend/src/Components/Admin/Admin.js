import React from "react";

import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { loggingAdmin, logoutAdmin } from "../../actions/rootActions";

import Login from "./Login/Login";
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
  root: state.root,
});

const mapDispatchToProps = {
  loggingAdmin,
  logoutAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

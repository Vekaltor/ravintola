import React from "react";

import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";

import Login from "./features/authorization/login/Login";
import PanelAdmin from "./PanelAdmin";
import PrivateRoute from "./PrivateRoute";

const Admin = () => {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/*" element={<PanelAdmin />} />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, {})(Admin);

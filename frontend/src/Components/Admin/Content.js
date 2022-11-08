import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import AddDishForm from "./Dishes/AddDishForm";

import Dishes from "./Dishes/Dishes";
import Product from "./Dishes/Product";

function Content() {
  return (
    <div className="content-admin-panel">
      <Routes>
        <Route element={<Dishes />} path="dishes/*" />
        <Route exact element={<AddDishForm />} path="dishes/creation" />
        {/* <Route exact element={<Product />} path="dishes/:id" /> */}
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, {})(Content);

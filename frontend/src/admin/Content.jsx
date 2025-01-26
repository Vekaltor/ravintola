import { Routes, Route } from "react-router-dom";

import Dashboard from "./features/Dashboard/Dashboard";
import AddDishForm from "./features/Dishes/addDish/AddDishForm";
import Dishes from "./features/Dishes/Dishes";

function Content() {
  return (
    <div className="content-admin-panel">
      <Routes>
        <Route element={<Dashboard />} path="/" />
        <Route element={<Dishes />} path="dishes/*" />
        <Route exact element={<AddDishForm />} path="dishes/creation" />
      </Routes>
    </div>
  );
}

export default Content;

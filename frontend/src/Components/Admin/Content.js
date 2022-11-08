import { Routes, Route } from "react-router-dom";

import Dishes from "./Dishes/Dishes";
import Product from "./Dishes/Product";

function Content() {
  return (
    <div className="content-admin-panel">
      <Routes>
        <Route element={<Dishes />} path="dania" />
        <Route element={<Product />} path="dania/:id" />
        <Route element={<Product />} path="dodawanie" />
      </Routes>
    </div>
  );
}

export default Content;

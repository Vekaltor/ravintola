import { Routes, Route } from "react-router-dom";
import Dishes from "./Dishes";

function Content() {
  return (
    <div className="content-admin-panel">
      <Routes>
        <Route element={<Dishes />} path="dania" />
      </Routes>
    </div>
  );
}

export default Content;

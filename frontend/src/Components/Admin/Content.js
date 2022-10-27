import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Dishes from "./Dishes";

function Content() {
  const { auth } = useSelector((state) => state.admin);
  function click() {
    console.log(auth);
  }
  return (
    <div className="content-admin-panel">
      <Routes>
        <Route element={<Dishes />} path="dania" />
      </Routes>
      <button onClick={() => click()}>click</button>
    </div>
  );
}

export default Content;

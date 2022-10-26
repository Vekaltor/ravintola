import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = () => {
  // const { auth } = useSelector((state) => state.admin);
  let auth = true;
  return auth ? <Outlet /> : <Navigate to="/admin/logowanie" />;
};

export default PrivateRoute;

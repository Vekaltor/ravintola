import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { auth } = useSelector((state) => state.root);
  return auth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;

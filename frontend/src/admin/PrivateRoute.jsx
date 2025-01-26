import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { auth } = useSelector((state) => state.authorization);
  return auth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;

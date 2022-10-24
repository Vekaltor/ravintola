import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const { auth } = useSelector((state) => state.admin);
  return auth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoutes;

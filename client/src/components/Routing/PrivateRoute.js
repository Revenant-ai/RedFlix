import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({prop}) => {
  return localStorage.getItem("authToken") ? (
    console.log(localStorage.getItem("authToken")),
    <Outlet {...prop} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

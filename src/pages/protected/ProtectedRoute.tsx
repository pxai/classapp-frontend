import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "../../hooks/useCurrentUser";

export default function ProtectedRoute() {
  const {
    data: user,
    isLoading,
  } = useCurrentUser();

  if (isLoading)
    return <>Loading...</>;

  if (!user)
    return <Navigate to="/login" replace />;

  //return <Outlet />;
  return  <Outlet />;
}
import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useTasks } from "../../hooks/useTasks";


export default function ProtectedRoute() {
  const {data: tasks } = useTasks();
  const {
    data: user,
    isLoading,
  } = useCurrentUser();

  if (isLoading)
    return <>Loading...</>;

  if (!user)
    return <Navigate to="/login" replace />;

  //return <Outlet />;
  return <>
  <h1>Dashboard {user?.email}</h1>
  <p>This is the protected dashboard</p>
      <ul>
      {tasks?.map((t: any) => (
        <li key={t.id}>{t.task}</li>
      ))}
    </ul>
  </>
}
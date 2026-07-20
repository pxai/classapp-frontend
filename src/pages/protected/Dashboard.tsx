import { useTasks } from "../../hooks/useTasks";

export default function ProtectedRoute() {
  const {data: tasks } = useTasks();
  return <>
  <h1>Dashboard</h1>
  <p>This is the protected dashboard</p>
      <ul>
      {tasks?.map((t: any) => (
        <li key={t.id}>{t.task}</li>
      ))}
    </ul>
  </>
}
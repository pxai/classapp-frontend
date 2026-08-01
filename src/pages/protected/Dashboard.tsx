import { Link } from "react-router";
import { useTasks } from "../../hooks/useTasks";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { TaskForm } from "../../components/task/taskForm";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { useCreateTask } from "../../hooks/useCreateTask";

export default function ProtectedRoute() {
  const { data: tasks } = useTasks();
  const { data: user } = useCurrentUser();
  const deleteTask = useDeleteTask();
  const createTask = useCreateTask();

  const deleteHandler = async (id: number) => {
    await deleteTask.mutateAsync(id, {
        onSuccess: () => {
          console.log("Task deleted!")
        },
      });
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Dashboard</h1>
      <TaskForm
        initialValues={{
          task: "",
          description: "",
          status: "0",
          userId: user.id,
        }}
        submitLabel="Create Task"
        onSubmit={async (values) => {
          await createTask.mutateAsync(values);
        }}
      />
      <p>This is the protected dashboard</p>
      <div>
        {tasks?.map((t: any) => (
          <div key={t.id}>
            <span>{t.task}</span>
            <Link to={`/dashboard/task/edit/${t.id}`}>Update</Link>
            <div onClick={() => deleteHandler(t.id)}>Delete</div>
          </div>
        ))}
      </div>
    </>
  );
}

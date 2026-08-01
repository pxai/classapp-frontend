import { useParams } from "react-router";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { TaskForm } from "../../components/task/taskForm";
import { useTask } from "../../hooks/useTask";
import { useUpdateTask } from "../../hooks/useUpdateTask";

export default function EditTask() {
  const { id } = useParams<{ id: string }>();
  const taskId = id ? Number(id) : undefined;
  const { data: user } = useCurrentUser();
  const { data: task, isLoading } = useTask(taskId);
  const updateTask = useUpdateTask();

  if (!user) {
    return <p>Loading user...</p>;
  }

  if (isLoading || !task) {
    return <p>Loading task...</p>;
  }

  return (
    <>
      <h1>Update task {id}</h1>
      <TaskForm
        initialValues={task}
        submitLabel="Update Task"
        onSubmit={async (values) => {
          console.log("About to update task: ", values);
          await updateTask.mutateAsync({ id: taskId!, task: values });
        }}
      />
    </>
  );
}

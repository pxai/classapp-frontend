import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../api/tasks";
import type { UpdateTaskDto, TaskDto } from "../types/entities";

type UpdateTaskVariables = {
  id: number;
  task: UpdateTaskDto;
};

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation<TaskDto, unknown, UpdateTaskVariables>({
    mutationFn: ({ id, task }) => updateTask(id, task),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
}

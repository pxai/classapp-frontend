import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../api/tasks";
import type { CreateTaskDto, TaskDto } from "../types/entities";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation<TaskDto, unknown, CreateTaskDto>({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
}

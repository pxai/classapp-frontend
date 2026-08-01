import { useQuery } from "@tanstack/react-query";
import { getTask } from "../api/tasks";

export function useTask(id: number | undefined) {
  return useQuery({
    queryKey: ["tasks", id],
    queryFn: () => getTask(id as number),
    enabled: !!id,
  });
}
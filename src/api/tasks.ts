import { api } from "../lib/api";
import type { CreateTaskDto, UpdateTaskDto, TaskDto } from "../types/entities";

export async function getTasks(): Promise<TaskDto[]> {
  const response = await api.get<TaskDto[]>("/tasks");
  return response.data;
}

export async function getTask(id: number): Promise<TaskDto> {
  const response = await api.get<TaskDto>(`/tasks/${id}`);
  return response.data;
}

export async function createTask(task: CreateTaskDto): Promise<TaskDto> {
  const response = await api.post<TaskDto>("/tasks", task);
  return response.data;
}

export async function updateTask(id: number, task: UpdateTaskDto): Promise<TaskDto> {
  const response = await api.patch<TaskDto>(`/tasks/${id}`, task);
  return response.data;
}

export async function deleteTask(id: number): Promise<void> {
  await api.delete<number>(`/tasks/${id}`);
}
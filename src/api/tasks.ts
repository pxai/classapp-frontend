import { api } from "../lib/api";

export async function getTasks() {
  const response = await api.get("/tasks");
  return response.data;
}
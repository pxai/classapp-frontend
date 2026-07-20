import { api } from "../lib/api";

export async function login(
  email: string,
  password: string
) {
  const response = await api.post("/auth/login", {
    username: email,
    password,
  });

  return response.data;
}

export async function currentUser() {
  const response = await api.get("/auth/me");
  return response.data;
}

export async function logout() {
  await api.post("/auth/logout");
}
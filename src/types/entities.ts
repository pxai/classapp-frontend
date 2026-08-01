export type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type UserDto = User;

export type CreateUserDto = Omit<User, "id" | "createdAt" | "updatedAt">;

export type UpdateUserDto = Partial<CreateUserDto>;

export type Task = {
  id: string;
  task: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user?: User;
};

export type TaskDto = Omit<Task, "user">;

export type CreateTaskDto = Omit<Task, "id" | "createdAt" | "updatedAt" | "user">;

export type UpdateTaskDto = Partial<CreateTaskDto>;

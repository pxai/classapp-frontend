import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api/auth";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => login(email, password),

    onSuccess: (data) => {
      localStorage.setItem(
        "token",
        data.access_token
      );

      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
  });
}
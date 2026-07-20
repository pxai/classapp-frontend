import { useState } from "react";
import { useNavigate } from "react-router";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const login = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit() {
    login.mutate(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          navigate("/dashboard");
        },
      }
    );
  }

  return (
    <>
    <div>Email</div>
    <div>
      <input
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />
    </div>
    <div>Password</div>
      <div><input
      type="password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
    />
    </div>

      <button onClick={submit}>
        Login
      </button>
    </>
  );
}
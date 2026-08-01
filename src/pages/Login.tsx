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
    <div className="flex flex-col">
    <div className="form-field">
      <div>Email</div>
      <div>
        <input
          className="input-text"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
      </div>
    </div>
    <div className="form-field">
      <div>Password</div>
        <div><input
          className="input-text"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
        }
      />
      </div>
    </div>
      <button className="btn-primary" onClick={submit}>
        Login
      </button>
    </div>
  );
}
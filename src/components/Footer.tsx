import { Link } from "react-router";
import { useCurrentUser } from "../hooks/useCurrentUser";

export default function Footer () {
  const {data: user} = useCurrentUser();
  return (
    <footer className="border-t p-4 text-center">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          { user
            ? <Link to="/dashboard">Dashboard</Link>
            : <Link to="/login">Login (Here)</Link>
          }
        </nav>
        © 2026
      </footer>
  )
}
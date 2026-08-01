import { Link } from "react-router";

export default function Footer () {
  return (
    <footer className="border-t p-4 text-center">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/login">Login (Here)</Link>
        </nav>
        © 2026
      </footer>
  )
}
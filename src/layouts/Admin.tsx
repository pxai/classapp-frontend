// components/Layout.tsx
import { Outlet } from "react-router";
import { Link } from "react-router";

export default function Admin() {
  return (
    <>
      <header>My App</header>

      <main>
        <Outlet />
      </main>

      <footer>
                <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>
        © 2026
        </footer>
    </>
  );
}
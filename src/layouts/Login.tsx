// components/Layout.tsx
import { Outlet } from "react-router";
import { Link } from "react-router";

export default function Admin() {
  return (
    <>
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center">
        <Outlet />
      </main>

      <footer className="border-t p-4 text-center">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/login">Login (Here)</Link>
        </nav>
        © 2026
      </footer>
    </div>
    </>
  );
}
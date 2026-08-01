// components/Layout.tsx
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function Default() {
  return (
    <div className="min-h-screen page-container">
      <header>My App</header>

      <main >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
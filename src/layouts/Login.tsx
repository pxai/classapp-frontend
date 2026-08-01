// components/Layout.tsx
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function Admin() {
  return (
    <>
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
    </>
  );
}
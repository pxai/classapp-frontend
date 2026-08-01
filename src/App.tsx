// App.tsx
import { Routes, Route } from "react-router";
import Default from "./layouts/Default";
import LoginLayout from "./layouts/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/protected/ProtectedRoute";
import Dashboard from "./pages/protected/Dashboard";
import EditTask from "./pages/protected/EditTask";

export default function App() {
  return (
    <Routes>
      {/* Routes with the default layout */}
      <Route element={<Default />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
          <Route path="dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="task/edit/:id" element={<EditTask />} />
          </Route>
      </Route>

      {/* Routes without the layout */}
      <Route path="login" element={<LoginLayout />} >
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}
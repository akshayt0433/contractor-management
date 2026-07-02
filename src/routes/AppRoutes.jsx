import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Workforce from "../pages/Workforce";
import AddWorker from "../pages/AddWorker";
import WorkerProfile from "../pages/WorkerProfile";
import Sites from "../pages/Sites";
import Payments from "../pages/Payments";
import Materials from "../pages/Materials";
import Expenses from "../pages/Expenses";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Pages */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Workforce */}
          <Route path="/workforce" element={<Workforce />} />

          {/* Add Worker */}
          <Route path="/workforce/add" element={<AddWorker />} />

          {/* Worker Profile */}
          <Route
            path="/workforce/:id"
            element={<WorkerProfile />}
          />

          {/* Other Pages */}
          <Route path="/sites" element={<Sites />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
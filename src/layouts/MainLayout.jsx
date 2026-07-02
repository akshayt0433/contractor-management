import { Outlet } from "react-router-dom";
import BottomNavigation from "../components/layout/BottomNavigation";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      <Outlet />

      <BottomNavigation />

    </div>
  );
}
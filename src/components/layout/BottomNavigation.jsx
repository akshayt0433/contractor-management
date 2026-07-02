import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaBars,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export default function BottomNavigation() {
  const active =
    "text-green-700";

  const inactive =
    "text-gray-500";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">

      <div className="grid grid-cols-5">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center py-3 ${
              isActive ? active : inactive
            }`
          }
        >
          <FaHome size={22} />
          <span className="text-xs mt-1">
            Home
          </span>
        </NavLink>

        <NavLink
          to="/workforce"
          className={({ isActive }) =>
            `flex flex-col items-center py-3 ${
              isActive ? active : inactive
            }`
          }
        >
          <FaUsers size={22} />
          <span className="text-xs mt-1">
            Workforce
          </span>
        </NavLink>

        <NavLink
          to="/sites"
          className={({ isActive }) =>
            `flex flex-col items-center py-3 ${
              isActive ? active : inactive
            }`
          }
        >
          <FaBuilding size={22} />
          <span className="text-xs mt-1">
            Sites
          </span>
        </NavLink>

        <NavLink
          to="/payments"
          className={({ isActive }) =>
            `flex flex-col items-center py-3 ${
              isActive ? active : inactive
            }`
          }
        >
          <FaMoneyBillWave size={22} />
          <span className="text-xs mt-1">
            Payments
          </span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex flex-col items-center py-3 ${
              isActive ? active : inactive
            }`
          }
        >
          <FaBars size={22} />
          <span className="text-xs mt-1">
            More
          </span>
        </NavLink>

      </div>

    </nav>
  );
}
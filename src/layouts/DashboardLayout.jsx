import React from "react";
import { NavLink, Outlet } from "react-router";

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-3 px-3 py-2 rounded-md transition
   ${
     isActive
       ? "bg-gray-100 text-gray-900 font-semibold"
       : "text-gray-600 hover:bg-gray-100"
   }`;

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open bg-gray-100">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <nav className="flex items-center justify-between px-6 h-16 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center gap-4">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-sm btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>

            <h1 className="text-lg font-semibold text-gray-800">
              Admin Dashboard
            </h1>
          </div>

          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
            A
          </div>
        </nav>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="w-64 min-h-full bg-white border-r border-gray-200">
          <div className="h-16 flex items-center px-6 border-b border-gray-200">
            <span className="text-lg font-bold text-gray-900">Admin Panel</span>
          </div>

          <ul className="menu px-4 py-4 space-y-1">
            <li>
              <NavLink to="/" end className={navLinkClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 9.5l9-7 9 7V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
                </svg>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/manage-products" className={navLinkClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l3 3" />
                </svg>
                Manage Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard" end className={navLinkClass}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M9 9h6v6H9z" />
                </svg>
                Add Products
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;

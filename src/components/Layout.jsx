// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-blue-900">
      <Sidebar/> {/* Sidebar on the left */}

      <div className="flex flex-col flex-1">
        <Navbar className="bg-gray-800 text-white" /> {/* Navbar at the top */}
        <main className="flex-1 p-4 bg-slate-100">
          <Outlet /> {/* Main content area */}
        </main>
      </div>
    </div>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="bg-gray-800 text-white" /> {/* Navbar at the top */}
      <div className="flex flex-1">
        <Sidebar className="hidden md:block" /> {/* Sidebar on the left */}
        <main className="flex-1 p-4">
          <Outlet /> {/* Main content area */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
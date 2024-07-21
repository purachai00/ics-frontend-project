// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import { ListBulletIcon } from '@heroicons/react/24/solid'; // แก้ไขไอคอนที่ต้องการใช้

const Sidebar = () => {
  return (
    <div className="hidden md:block w-32 bg-white text-black min-h-screen p-4 rounded-r-3xl shadow-lg">
      <ul className="flex flex-col items-center justify-center space-y-4 p-4">
        <li>
        <img
          className='w-12 h-10 rounded-full object-scale-down bg-white'
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Itpo6HVZdAxGnGF1VGhNncyVA_SZoo5MBA&s"
        />
        </li>
        <li>
          <Link to="/" className="p-8 hover:bg-blue-800 rounded-lg flex flex-col items-center justify-center w-12 h-12 bg-blue-950 text-white shadow-lg delay-100 transition-all">
            <div className="flex flex-col items-center justify-center">
              <ListBulletIcon className="h-6 w-6 text-white" />
              <div className="text-sm font-medium mt-1">Place</div>
            </div>
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;

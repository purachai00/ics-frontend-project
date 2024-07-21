import { Bars3Icon, BellAlertIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-blue-900">
      <div className="flex-1">
        <img
          className='w-12 h-10 rounded-full object-scale-down bg-white md:hidden'
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Itpo6HVZdAxGnGF1VGhNncyVA_SZoo5MBA&s"
        />
      </div>
      <div className="flex-none lg:hidden relative">
  <button className="btn btn-ghost btn-circle" onClick={toggleMenu}>
    <Bars3Icon className="w-10 h-10 text-white" />
  </button>
  {isMenuOpen && (
    <div className="dropdown-content bg-base-100 absolute top-14 right-0 mt-2 w-48 shadow-lg rounded-lg z-50">
      <ul className="menu menu-compact">
        <li>
          <Link to="/" className="py-2 px-4">Home</Link>
        </li>
        <li>
          <Link to="/" className="py-2 px-4">About</Link>
        </li>
        <li>
          <Link to="/" className="py-2 px-4">Contact</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  )}
</div>
      <div className="flex-none hidden lg:flex lg:items-center">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BellAlertIcon className="w-5 h-5 text-white"/>
              <span className="badge badge-sm indicator-item bg-red-600 border-red-600">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Messages</span>
              <span className="text-info">From : Friend 1, Friend 2</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">Check Message Box</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-32 bg-gray-800 text-white min-h-screen p-4">
      <ul>
        <li>
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
    <nav className="max-w-4xl mx-auto">
      <ul className="flex items-center justify-between">
        <li>
          <Link to="/add-user" className="text-white hover:text-gray-200 font-semibold px-3 py-2 rounded-md">Add User</Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      <Link to="/" className="text-xl font-bold text-blue-700">✈ AI Travel</Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link to="/dashboard" className="text-sm text-gray-600 hover:text-blue-600">Dashboard</Link>
            <Link to="/browse-trips" className="text-sm text-gray-600 hover:text-blue-600">Trips</Link>
            <button onClick={() => { logout(); navigate('/login'); }}
              className="text-sm bg-red-50 text-red-600 px-3 py-1 rounded-lg hover:bg-red-100">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm text-gray-600 hover:text-blue-600">Login</Link>
            <Link to="/register" className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

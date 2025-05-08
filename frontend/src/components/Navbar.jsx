import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md p-4 top-0 sticky z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="font-extrabold tracking-widest">
            Recipes<span className="text-blue-500">HUB</span>
          </h1>
        </Link>
        <div className="flex gap-x-4">
          {user ? (
            <div className="flex gap-x-4">
              <Link to="/add-recipe">
                <button className="cursor-pointer bg-blue-400 px-5 py-2 rounded text-white hover:bg-blue-500 ">
                  Add Recipe
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="cursor-pointer px-5 py-2 border border-blue-400 rounded text-blue-400 hover:border-blue-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="cursor-pointer bg-blue-400 px-5 py-2 rounded text-white hover:bg-blue-500">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="cursor-pointer px-5 py-2 border border-blue-400 rounded text-blue-400 hover:border-blue-500">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

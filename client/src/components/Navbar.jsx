import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-[#ff5e5b] text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-widest">💸 SplittBill</h1>

      <div className="space-x-6 text-sm md:text-base">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/groups" className="hover:underline">Groups</Link>
        <Link to="/add-expense" className="hover:underline">Add Expense</Link>
        <button 
          onClick={handleLogout}
          className="bg-white text-[#ff5e5b] font-semibold px-3 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

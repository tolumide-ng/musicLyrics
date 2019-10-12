import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <div className="w-full flex justify-between px-4 items-center visible lg:invisible mt-4">
      <NavLink
        to="/"
        className="bg-indigo-400 p-1 rounded text-white cursor-pointer"
      >
        Home
      </NavLink>
      <NavLink
        to="/search"
        className="bg-indigo-400 p-1 rounded cursor-pointer text-white"
      >
        Search
      </NavLink>
    </div>
  );
};

export default Navbar;

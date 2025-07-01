import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-3 bg-zinc-600 text-white font-serif">
        <h1 className="cursor-pointer text-xl">Todo List</h1>
        <div className="flex justify-center items-center space-x-2">
          <ul className="flex space-x-4">
            <li className="cursor-pointer">Documentation</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <button className="px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-serif cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

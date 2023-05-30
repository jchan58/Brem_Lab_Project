import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="flex px-4 sm:px-6">
          <div className="flex items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="UWP"
                />
              </Link>
            </div>
            <div className="block">
              <div className="ml-10 flex items-baseline space-x-2 text-lg font-medium">
                <Link
                  to="/"
                  className="hover:bg-gray-700 hover:text-white text-gray-300 px-3 py-2 rounded-md "
                >
                  Home
                </Link>
                <Link
                  to="/game"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                >
                  Projects
                </Link>
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                >
                  Team
                </Link>
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center">
          </div>
        </div>
        <div className="h-2 bg-gray-900"></div>
      </nav>
    </div>
  );
}

export default NavBar;

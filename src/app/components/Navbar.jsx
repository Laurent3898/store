import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Online Store
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Accueil
                </Link>
                <Link
                  href="/comments"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Comments
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex bg-red-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <Link href="/login">Signout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

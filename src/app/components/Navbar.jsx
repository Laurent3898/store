"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Online Store
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/items"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Items
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                {session ? (
                  <button
                    type="button"
                    className="relative flex bg-red-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    onClick={signOut}
                  >
                    Sign Out
                  </button>
                ) : (
                  providers &&
                  Object.values(providers).map((provider, index) => (
                    <button
                      key={index}
                      type="button"
                      className="relative flex bg-orange-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      onClick={() => signIn(provider.id)}
                    >
                      Sign In with {provider.name}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

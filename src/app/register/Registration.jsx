"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  return NextResponse.json(data);
}

const Registration = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //State new data
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); //set Loading to true

    try {
      const response = await fetch("http://localhost:4000/api/users/new", {
        method: "POST",
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        headers: { "content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      console.log("Registration successful");
      //Redirect to login
      router.push("/login");
    } catch (error) {
      console.error("Error during registration:", error.message);
    } finally {
      setUsername("");
      setPassword("");
      setRepeatedPassword("");
      setLoading(false); // Reset loading to false after the request
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-3xl font-bold text-orange-700">
          Online Store
        </h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registration Form
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="usernameRegister"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="usernameRegister"
                name="usernameRegister"
                type="text"
                autoComplete="usernameRegister"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="passwordRegister"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="passwordRegister"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="repasswordRegister"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Repeat Password
              </label>
            </div>
            <div className="mt-2">
              <input
                value={repeatedPassword}
                onChange={(e) => setRepeatedPassword(e.target.value)}
                id="repasswordRegister"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>

        {/* Link to Login */}
        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Already have an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;

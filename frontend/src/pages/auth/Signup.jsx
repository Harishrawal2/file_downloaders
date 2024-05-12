import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center text-white py-20">
      <div className="w-[500px] bg-slate-900 px-10 py-10 rounded-sm">
        <div className="mb-5 font-bold text-center text-2xl text-opacity-1">
          <h1>Sign Up</h1>
        </div>
        <form className="flex flex-col gap-5 w-[100%]">
          <input
            type="text"
            className="py-2 px-2 rounded-full"
            name="name"
            placeholder="Enter your name"
          />
          <input
            type="email"
            className="py-2 px-2 rounded-full"
            name="email"
            placeholder="example@gmail.com"
          />
          <input
            type="password"
            className="py-2 px-2 rounded-full"
            name="password"
            placeholder="Password"
          />
          <button className="py-2 px-2 bg-slate-700 hover:bg-slate-500 transition-all 0.5s ease-in-out rounded-full uppercase">
            Signup
          </button>
          <p className="text-center">
            already have an account{" "}
            <Link to="/signin" className="text-blue-500">
              signin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

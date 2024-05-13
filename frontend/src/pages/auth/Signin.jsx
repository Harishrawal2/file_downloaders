import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const InputChange = (e) => {
    const { name, value } = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:5000/api/login");
  };

  return (
    <div className="flex justify-center items-center text-white py-20">
      <div className="w-[500px] bg-slate-900 px-10 py-10 rounded-lg">
        <div className="mb-5 font-bold text-center text-2xl text-opacity-1">
          <h1>Sign In</h1>
        </div>
        <form className="flex flex-col gap-5 w-[100%]">
          <input
            type="email"
            className="py-2 px-2 rounded-full"
            name="email"
            placeholder="example@gmail.com"
            value={user.email}
            onChange={InputChange}
          />
          <input
            type="password"
            className="py-2 px-2 rounded-full"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={InputChange}
          />
          <button className="py-2 px-2 bg-slate-700 hover:bg-slate-500 transition-all 0.5s ease-in-out rounded-full uppercase">
            Signin
          </button>
          <p className="text-center">
            Create an account{" "}
            <Link to="/signup" className="text-blue-500">
              signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

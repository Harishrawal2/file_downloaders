import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const InputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        user
      );
      console.log("Login successfully!", response.data);
      toast.success(response.data.message);
      setUser({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("No response received from server");
      }
    }
  };

  return (
    <div className="flex justify-center items-center text-white py-20">
      <div className="w-[500px] bg-slate-900 px-10 py-10 rounded-lg">
        <div className="mb-5 font-bold text-center text-2xl text-opacity-1">
          <h1>Sign In</h1>
        </div>
        <form
          className="flex flex-col gap-5 w-[100%] text-gray-500"
          onSubmit={handleSubmit}
        >
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

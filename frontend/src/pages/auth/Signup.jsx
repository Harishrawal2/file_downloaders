import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
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
        "http://localhost:5000/api/register",
        user
      );
      console.log("User data submitted successfully!", response.data);
      toast.success(response.data.message);
      setUser({ name: "", email: "", password: "" });
      navigate("/signin");
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
          <h1>Sign Up</h1>
        </div>
        <form
          className="flex flex-col gap-5 w-[100%] text-gray-700 font-medium"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="py-2 px-2 rounded-full"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={InputChange}
          />
          <input
            type="email"
            className="py-2 px-2 rounded-full"
            name="email"
            placeholder="Email Address"
            onChange={InputChange}
            value={user.email}
          />
          <input
            type="password"
            className="py-2 px-2 rounded-full"
            name="password"
            placeholder="Password"
            onChange={InputChange}
            value={user.password}
          />
          <button className="py-2 px-2 bg-slate-700 hover:bg-slate-500 transition-all 0.5s ease-in-out rounded-full uppercase text-white hover:text-black">
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <div className="bg-slate-900 flex justify-between items-center px-20 p-5 text-xl">
      <div className="text-2xl">
        <Link to="/">
          <h1>File Downloaders</h1>
        </Link>
      </div>
      <div className="flex items-center gap-10 cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/pricing">Pricing</Link>
      </div>

      <div className="flex items-center gap-5 cursor-pointer">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Navbar from "./Components/Header/Navbar";
import Signin from "./pages/auth/Signin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;

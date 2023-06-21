import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import SignUp from "../Components/addproduct/AddProduct";

const RoutesL = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="signup/:id" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default RoutesL;

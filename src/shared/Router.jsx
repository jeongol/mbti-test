import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Home from "../pages/Home";
import TestResultPage from "../pages/TestResultPage";
import TestResultItem from "../components/TestResultItem";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/testresiltitem" element={<TestResultItem />} />
        <Route path="/tsetresultpage" element={<TestResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

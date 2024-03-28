// AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import JobDetailsPage from './pages/JobDetailsPage';
import PostJobPage from './pages/PostJobPage'; //for users to create job listings

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/jobs/:jobId" element={<JobDetailsPage/>} />
      <Route path="/post-job" element={<PostJobPage/>} />
    </Routes>
  );
};

export default AppRoutes;

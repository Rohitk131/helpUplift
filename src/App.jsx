import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile"
import OrgHome from "../pages/OrgHome";
import Leaderboard from "../pages/Leaderboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<OrgHome/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
      </Routes>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from "../pages/Profile"
import OrgHome from "../pages/OrgHome";
import Leaderboard from "../pages/Leaderboard";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import Enrolled from "../pages/enrolled";
import Contact from "../pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<OrgHome/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/enprojects" element={<Enrolled/>} />
 
      </Routes>
    </Router>
  );
}

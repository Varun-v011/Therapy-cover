import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import "./App.css";

function App() {
  const dummyProfile = null; // You can later replace this with API data

  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: "flex" }}>
        <Navbar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile profile={dummyProfile} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

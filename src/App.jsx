import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Availability from "./Components/availability";
import Coverage from "./Components/coveragePg";


function App() {
  const dummyProfile = null;  //profile api

  return (
    <BrowserRouter>
      <div className="app-container" style={{ display: "flex" }}>
        <Navbar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile profile={dummyProfile} />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/Coverage" element={<Coverage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

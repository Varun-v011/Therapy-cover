import React from "react";
import { Link } from "react-router-dom";
import {
  FaRegCalendarCheck,
  FaRegCalendarMinus,
  FaThLarge,
  FaSearch,
  FaRegCommentDots,
  FaRegClock,
  FaUser
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      {/* Top Section */}
      <div>
        <div className="navbar-header">
          <FaRegCommentDots className="navbar-logo-icon" />
          <span className="navbar-brand">Therapy Coverage</span>
        </div>

        <div className="navbar-nav-section">
          <span className="navbar-nav-label">Navigation</span>
          <ul className="navbar-list">
            <li className="navbar-list-item">
              <FaThLarge className="navbar-list-icon" />
              <Link to="/" className="nav-links">Dashboard</Link>
            </li>
            <li className="navbar-list-item">
              <FaRegCalendarCheck className="navbar-list-icon" />
              <Link to="/plan-leave" className="nav-links">Plan my leave</Link>
            </li>
            <li className="navbar-list-item">
              <FaRegCalendarMinus className="navbar-list-icon" />
              <Link to="/coverage-requests" className="nav-links">Browse coverage requests</Link>
            </li>
            <li className="navbar-list-item">
              <FaSearch className="navbar-list-icon" />
              <Link to="/therapists" className="nav-links">Browse therapists</Link>
            </li>
            <li className="navbar-list-item">
              <FaRegCommentDots className="navbar-list-icon" />
              <Link to="/messages" className="nav-links">Messages</Link>
            </li>
            <li className="navbar-list-item">
              <FaRegClock className="navbar-list-icon" />
              <Link to="/availability" className="nav-links">Set availability</Link>
            </li>
            <li className="navbar-list-item">
              <FaUser className="navbar-list-icon" />
              <Link to="/profile" className="nav-links">My profile</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <div className="navbar-footer">
        <div>ana@therapy-coverage.com</div>
        <div>v1.0.7</div>
        <Link to="/" className="navbar-reset">Reset cache</Link>
        <Link to="/" className="navbar-logout">➜ Log out</Link>
      </div>
    </div>
  );
}

export default Navbar;

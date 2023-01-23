import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img src="/imgs/Logo.svg" alt="logo" className="logo" />
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Reservations</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Order Online</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

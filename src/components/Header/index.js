import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <img src="/imgs/Logo.svg" alt="logo" className="logo" />
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Menu</li>
            <li className="nav-item">Reservations</li>
            <li className="nav-item">Order Online</li>
            <li className="nav-item">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

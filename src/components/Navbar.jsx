import React from "react";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-black">
      <div className="container">
          <img src={logo} alt="Weather App Logo" width="200" height="60" className="d-inline-block align-text-top me-2" />
      </div>
    </nav>
  );
};

export default Navbar;
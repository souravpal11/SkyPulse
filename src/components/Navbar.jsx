import React from "react";
import logo from "../logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({
  city,
  setCity,
  searchWeather,
  getCurrentLocation,
  suggestions,
  setSuggestions,
}) => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-dark bg-black ">
      <div className="container p-0">
        <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="Weather App Logo"
          width="150"
          height="50"
          className="d-inline-block align-text-top me-3"
        />

        <Link className="nav-link text-light me-3" to="/">
          Home
        </Link>
        <Link className="nav-link text-light me-2" to="/about">
          About
        </Link>
        </div>
        {location.pathname !== "/about" && (
          <form
            className="d-flex align-items-center bg-dark rounded-pill p-0 mt-1"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent page reload
              if (city.trim()) {
                searchWeather();
              }
            }}
            style={{ maxWidth: "500px" }}
          >
            <div className="search-container-fluid m-1 ">
              <input
                type="text"
                className="form-control me-1  rounded-pill"
                placeholder="Search city..."
                style={{ maxWidth: "300px" }}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {suggestions.length > 0 && (
                <div className="suggestions-box" style={{ maxWidth: "300px" }}>
                  {suggestions.map((item, index) => (
                    <div
                      key={index}
                      className="suggestion-item"
                      onClick={() => {
                        setCity(item.name);

                        setSuggestions([]);

                        searchWeather(item.name);
                      }}
                    >
                      📍 {item.name}, {item.country}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary me-1 rounded-pill">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button
              className="btn btn-success rounded-pill"
              onClick={getCurrentLocation}
            >
              <i className="fa-solid fa-location-crosshairs py-1"></i>
              {/* <pre style={{margin:"0px"}}> Current Location</pre> */}
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

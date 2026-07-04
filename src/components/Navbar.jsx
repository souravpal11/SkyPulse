import React from "react";
import logo from "../logo.png";

const Navbar = ({
  city,
  setCity,
  searchWeather,
  getCurrentLocation,
  suggestions,
  setSuggestions,
}) => {
  return (
    <nav className="navbar navbar-dark bg-black ">
      <div className="container">
        <img
          src={logo}
          alt="Weather App Logo"
          width="200"
          height="60"
          className="d-inline-block align-text-top me-2"
        />
        <form
          className="d-flex align-items-center bg-dark rounded-pill p-2 mt-2"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent page reload
            if (city.trim()) {
              searchWeather();
            }
          }}
          style={{ maxWidth: "500px" }}
        >
          <div className="search-container-fluid m-1 " >
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

          <button
            type="submit"
            className="btn btn-primary me-1 rounded-pill"
            
          >
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
      </div>
    </nav>
  );
};

export default Navbar;

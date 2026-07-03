import React from "react";

const SearchBar = ({ city, setCity, searchWeather, getCurrentLocation }) => {
  return (
    <div className="container mt-4">
      <div className="input-group d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search city..."
          style={{ maxWidth: "300px" }}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button className="btn btn-primary me-2" onClick={searchWeather}>
          Search
        </button>

        <button className="btn btn-success" onClick={getCurrentLocation}>
         <i class="fa-solid fa-location-crosshairs"></i> Current Location
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

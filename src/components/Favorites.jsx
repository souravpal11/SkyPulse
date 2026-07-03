import React from "react";

const Favorites = ({ favorites, onSelect, onRemove }) => {
  if (favorites.length === 0) return null;

  return (
    <div className="container mt-4">
      <div className="weather-card">

        <h3 className="mb-3">⭐ Favorite Cities</h3>

        {favorites.map((city, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-2"
          >
            <button
              className="btn btn-outline-light"
              onClick={() => onSelect(city)}
            >
              {city}
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => onRemove(city)}
            >
              ✖
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Favorites;
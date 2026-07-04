import React from "react";
import { WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-md-4">
          <div className="weather-card text-center">
            <WiHumidity size={60} />
            <h5>Humidity</h5>
            <h3>{weather.relative_humidity_2m}%</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="weather-card text-center">
            <WiStrongWind size={60} />
            <h5>Wind Speed</h5>
            <h3>{weather.wind_speed_10m} km/h</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="weather-card text-center">
            <WiThermometer size={60} />
            <h5>Feels Like</h5>
            <h3>{weather.apparent_temperature}°C</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

import React from "react";
import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiBarometer,
} from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";
// import WindCompass from "./WeatherCompass";

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const visibilityKm = (weather.visibility / 1000).toFixed(1);

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

        <div className="col-md-4">
          <div className="weather-card text-center">
            <MdOutlineVisibility size={60} />
            <h5>Visibility</h5>
            <h3>{visibilityKm} km</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="weather-card text-center">
            <TbUvIndex size={60} />
            <h5>UV Index</h5>
            <h3>{weather.uv_index}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="weather-card text-center">
            <WiBarometer size={60} />
            <h5>Pressure</h5>
            <h3>{weather.surface_pressure}</h3>
          </div>
        </div>
        {/* <div className="col-md-4">
          <div className="weather-card text-center">
            <WiWindDeg size={60} />
            <h5>Wind Direction</h5>
            <WindCompass degree={weather.wind_direction_10m} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherDetails;

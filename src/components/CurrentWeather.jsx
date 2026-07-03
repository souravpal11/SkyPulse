import React from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import WeatherIcon from "./WeatherIcon";
import { weatherDescription } from "../utils/weatherCode";

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="container  mt-4">
      <div className="card shadow-lg p-4 text-center text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <h2>
          <i class="fa-solid fa-location-dot"></i> {weather.city}, {weather.country}
        </h2>

        <WeatherIcon code={weather.weather_code} />

        <h1 className="display-2">{weather.temperature_2m}°C</h1>

        <h5>Feels Like {weather.apparent_temperature}°C</h5>

        <hr />

        <div className="row text-center">
          <div className="col-md-4">
            <WiHumidity size={50} />
            <h5>Humidity</h5>
            <p>{weather.relative_humidity_2m}%</p>
          </div>

          <div className="col-md-4">
            <WiStrongWind size={50} />
            <h5>Wind</h5>
            <p>{weather.wind_speed_10m} km/h</p>
          </div>

          <div className="col-md-4">
            <i class="fa-solid fa-cloud mt-3 mb-1" style={{fontSize: "1.6rem"}}></i>
            <h5>Weather</h5>
            <p>{weatherDescription(weather.weather_code)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

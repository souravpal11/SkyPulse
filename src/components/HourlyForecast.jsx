import React from "react";
import WeatherIcon from "./WeatherIcon";

const HourlyForecast = ({ hourly }) => {
  if (!hourly) return null;

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Today's Hourly Forecast</h3>

      <div className="d-flex overflow-auto">
        {hourly.time.slice(0, 24).map((time, index) => (
          <div
            key={index}
            className="forecast-card me-3"
            style={{ minWidth: "120px" }}
          >
            <h6>
              {new Date(time).toLocaleTimeString([], {
                hour: "numeric",
              })}
            </h6>

            <WeatherIcon code={hourly.weather_code[index]} size={50} />

            <h5>{hourly.temperature_2m[index]}°</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;

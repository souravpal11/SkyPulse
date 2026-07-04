import React from "react";
import WeatherIcon from "./WeatherIcon";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="container mt-5">
      <div className="forecast-container">
        <h3 className="forecast-title ms-3">7-Day Forecast</h3>

        {forecast.time.map((day, index) => (
          <div className="forecast-row d-flex justify-content-between" key={index}>
            <div className="forecast-day">
              {index === 0
                ? "Today"
                : new Date(day).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
            </div>

            <div className="forecast-icon " style={{ maxWidth: "50px" }}>
              <WeatherIcon code={forecast.weather_code[index]} size={45} />
            </div>

            <div className="forecast-temp me-4 d-flex justify-content-between" style={{ width: "200px" }}>
              <span className="rain-chance">
                💧 {forecast.precipitation_probability_max[index]}%
              </span>

              <span className="max-temp">
                {Math.round(forecast.temperature_2m_max[index])}°
              </span>

              <span className="min-temp">
                {Math.round(forecast.temperature_2m_min[index])}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

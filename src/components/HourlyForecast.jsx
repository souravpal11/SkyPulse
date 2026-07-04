import React from "react";
import WeatherIcon from "./WeatherIcon";


const HourlyForecast = ({ hourly }) => {
  if (!hourly) return null;

  // Find current hour
  const currentHour = new Date().getHours();

  // Find index of current hour in API data
  const startIndex = hourly.time.findIndex((time) => {
    return new Date(time).getHours() === currentHour;
  });

  // Show next 12 hours
  const hours =
    startIndex !== -1
      ? hourly.time.slice(startIndex, startIndex + 12)
      : hourly.time.slice(0, 12);

  return (
    <div className="container mt-5">
      <div className="hourly-container">

        <h3 className="hourly-title">
          Today's Forecast
        </h3>

        <div className="hourly-scroll">

          {hours.map((time, index) => (

            <div
              className="hour-card"
              key={index}
            >

              <p className="hour-time">
                {new Date(time).toLocaleTimeString([], {
                  hour: "numeric",
                })}
              </p>

              <WeatherIcon
                code={hourly.weather_code[startIndex + index]}
                size={50}
              />

              <h5>
                {Math.round(
                  hourly.temperature_2m[startIndex + index]
                )}
                °
              </h5>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
};

export default HourlyForecast;
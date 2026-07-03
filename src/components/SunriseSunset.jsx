import React from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";

const SunriseSunset = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="container mt-4">
      <div className="row g-3">

        <div className="col-md-6">
          <div className="weather-card text-center">
            <WiSunrise size={70} />
            <h4>Sunrise</h4>

            <h3>
              {new Date(forecast.sunrise[0]).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>

          </div>
        </div>

        <div className="col-md-6">
          <div className="weather-card text-center">
            <WiSunset size={70} />
            <h4>Sunset</h4>

            <h3>
              {new Date(forecast.sunset[0]).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h3>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SunriseSunset;
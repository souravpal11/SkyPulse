import React from "react";
import sunrise from "../assets/lottie/sunrise.json";
import sunset from "../assets/lottie/sunset.json";
import Lottie from "lottie-react";

const SunriseSunset = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="weather-card text-center">
            <Lottie animationData={sunrise} style={{ width: 90, height: 90 }} />
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
            <Lottie animationData={sunset} style={{ width: 90, height: 90 }} />
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

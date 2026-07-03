import React from "react";

const getAQIStatus = (aqi) => {
  if (aqi <= 50) return "🟢 Good";
  if (aqi <= 100) return "🟡 Moderate";
  if (aqi <= 150) return "🟠 Poor";
  if (aqi <= 200) return "🔴 Unhealthy";
  if (aqi <= 300) return "🟣 Severe";
  return " ⚫ Hazardous";
};

const AirQuality = ({ air }) => {
  if (!air) return null;

  return (
    <div className="container mt-4">
      <div className="weather-card">

        <h3 className="text-center mb-4">
          🌫 Air Quality
        </h3>

        <div className="row text-center">

          <div className="col-md-4">
            <h5>AQI</h5>
            <h2>{air.european_aqi}</h2>
            <p>{getAQIStatus(air.european_aqi)}</p>
          </div>

          <div className="col-md-4">
            <h5>PM2.5</h5>
            <h2>{air.pm2_5}</h2>
          </div>

          <div className="col-md-4">
            <h5>PM10</h5>
            <h2>{air.pm10}</h2>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AirQuality;
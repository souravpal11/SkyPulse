import React from "react";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center" >7-Day Forecast</h3>

      <div className="row">
        {forecast.time.map((day, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
            <div className="card shadow p-3 text-center h-100 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
              <h5>
                {new Date(day).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </h5>

              <h2>🌡️</h2>

              <h4>{forecast.temperature_2m_max[index]}°</h4>

              <p>Min: {forecast.temperature_2m_min[index]}°</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

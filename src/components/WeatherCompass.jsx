// import React from "react";
// import { FaLocationArrow } from "react-icons/fa";

// const WindCompass = ({ degree }) => {
//   return (
//     <div className="compass-container">
//       <div className="compass">
//         {/* Needle */}
//         <FaLocationArrow
//           className="needle"
//           style={{
//             transform: `rotate(${degree}deg)`,
//           }}
//         />

//         {/* Direction Labels */}
//         <span className="north">N</span>
//         <span className="east">E</span>
//         <span className="south">S</span>
//         <span className="west">W</span>

//         {/* Center Dot */}
//         <div className="center-dot"></div>
//       </div>

//       <h5 className="mt-3">{degree}°</h5>
//     </div>
//   );
// };

// export default WindCompass;

import React from "react";


const WindCompass = ({ degree = 0 }) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const direction = directions[Math.round(degree / 45) % 8];

  return (
    <div className="wind-card">
      <h5>Wind Direction</h5>

      <div className="compass">

        {/* Degree Ring */}
        <div className="ring"></div>

        {/* Needle */}
        <div
          className="needle"
          style={{
            transform: `translate(-50%, -100%) rotate(${degree}deg)`,
          }}
        >
          <div className="needle-head"></div>
          <div className="needle-tail"></div>
        </div>

        {/* Center */}
        <div className="center"></div>

        {/* Directions */}
        <span className="north">N</span>
        <span className="east">E</span>
        <span className="south">S</span>
        <span className="west">W</span>

        {/* Degree Marks */}
        {[...Array(36)].map((_, i) => (
          <div
            key={i}
            className="tick"
            style={{
              transform: `rotate(${i * 10}deg)`,
            }}
          />
        ))}
      </div>

      <h4>{direction}</h4>
      <p>{degree}°</p>
    </div>
  );
};

export default WindCompass;
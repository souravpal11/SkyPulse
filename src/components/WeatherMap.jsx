// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// import "leaflet/dist/leaflet.css";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   iconUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   shadowUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// });

// const WeatherMap = ({ weather }) => {
//   if (!weather) return null;

//   return (
//     <div className="container mt-4">

//       <div className="weather-card">

//         <h3 className="mb-3">
//           📍 Location
//         </h3>

//         <MapContainer
//           center={[
//             weather.latitude,
//             weather.longitude,
//           ]}
//           zoom={11}
//           style={{
//             height: "400px",
//             width: "100%",
//             borderRadius: "20px",
//           }}
//         >

//           <TileLayer
//             attribution='&copy; OpenStreetMap'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           <Marker
//             position={[
//               weather.latitude,
//               weather.longitude,
//             ]}
//           >
//             <Popup>

//               {weather.city}

//               <br />

//               {weather.temperature_2m}°C

//             </Popup>
//           </Marker>

//         </MapContainer>

//       </div>

//     </div>
//   );
// };

// export default WeatherMap;

// import React from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
// } from "react-leaflet";

// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // Fix marker icons
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// const API_KEY = "cdc3998cd4ee3c3c8d90fdcaf78e7ef1"; // <-- Replace with your API key

// const WeatherMap = ({ weather }) => {
//   if (!weather) return null;

//   return (
//     <div className="container mt-4">
//       <div className="weather-card">

//         <h3 className="mb-3">
//           🌍 Temperature Map
//         </h3>

//         <MapContainer
//           center={[weather.latitude, weather.longitude]}
//           zoom={8}
//           scrollWheelZoom={true}
//           style={{
//             height: "500px",
//             width: "100%",
//             borderRadius: "20px",
//           }}
//         >
//           {/* Base Map */}
//           <TileLayer
//             attribution="&copy; OpenStreetMap contributors"
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {/* Temperature Layer */}
//           <TileLayer
//             url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
//             opacity={0.6}
//           />

//           <Marker
//             position={[weather.latitude, weather.longitude]}
//           >
//             <Popup>
//               <strong>{weather.city}</strong>
//               <br />
//               🌡 {weather.temperature_2m}°C
//             </Popup>
//           </Marker>
//         </MapContainer>

//       </div>
//     </div>
//   );
// };

// export default WeatherMap;

import React from "react";
import Lottie from "lottie-react";
import globe from "../assets/lottie/Globe.json"

const WeatherMap = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="container mt-4">
      <div className="weather-card">
        <div className="d-flex align-items-center" style={{maxWidth:"400px"}}>
        <Lottie
        className="mb-3"
        animationData={globe}
        style={{
          width: 60,
          height: 70,
        }}
      />
      <h3 className="mb-3"> Live Weather Map</h3>
      </div>

        <iframe
          title="Windy Map"
          width="100%"
          height="500"
          frameBorder="0"
          src={`https://embed.windy.com/embed2.html?lat=${weather.latitude}&lon=${weather.longitude}&zoom=7&level=surface&overlay=temp&menu=true&message=false&marker=true&calendar=now`}
          style={{
            borderRadius: "20px",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default WeatherMap;

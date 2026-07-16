// import React from "react";
// import {
//   WiDaySunny,
//   WiDayCloudy,
//   WiCloud,
//   WiFog,
//   WiSprinkle,
//   WiRain,
//   WiSnow,
//   WiThunderstorm,
//   WiNightClear,
//   WiNightAltCloudy,
//   WiNightAltRain,
// } from "react-icons/wi";

// const WeatherIcon = ({ code, isDay = true, size = 40 }) => {

//   if (code === 0)
//     return isDay ? <WiDaySunny size={size}/> : <WiNightClear size={size}/>;

//   if (code === 1 || code === 2)
//     return isDay ? <WiDayCloudy size={size}/> : <WiNightAltCloudy size={size}/>;

//   if (code === 3)
//     return <WiCloud size={size}/>;

//   if (code === 45 || code === 48)
//     return <WiFog size={size}/>;

//   if (code >= 51 && code <= 57)
//     return <WiSprinkle size={size}/>;

//   if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82))
//     return isDay ? <WiRain size={size}/> : <WiNightAltRain size={size}/>;

//   if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86))
//     return <WiSnow size={size}/>;

//   if (code >= 95)
//     return <WiThunderstorm size={size}/>;

//   return isDay ? <WiDayCloudy size={size}/> : <WiNightAltCloudy size={size}/>;
// };

// export default WeatherIcon;

import React from "react";
import Lottie from "lottie-react";

import sunny from "../assets/lottie/sunny.json";
import cloudy from "../assets/lottie/cloudy.json";
import cloudySun from "../assets/lottie/sunclouds.json";
import cloudyMoon from "../assets/lottie/cloudynight.json";
import clearNight from "../assets/lottie/night.json";
import rain from "../assets/lottie/rain.json";
import snow from "../assets/lottie/snow.json";
import thunder from "../assets/lottie/thunder.json";
import fog from "../assets/lottie/fog.json";

const WeatherIcon = ({ code, isDay = true, size = 150 }) => {
  let animation = cloudy;

  switch (true) {
    // Clear Sky
    case code === 0:
      animation = isDay ? sunny : clearNight;
      break;

    // Mainly Clear / Partly Cloudy
    case code === 1:
    case code === 2:
      animation = isDay ? cloudySun : cloudyMoon;
      break;

    // Overcast
    case code === 3:
      animation = cloudy;
      break;

    //fog
    case code === 45 || code === 48:
      animation = fog;
      break;

    // Drizzle & Rain
    case code >= 51 && code <= 67:
    case code >= 80 && code <= 82:
      animation = rain;
      break;

    // Snow
    case code >= 71 && code <= 77:
    case code >= 85 && code <= 86:
      animation = snow;
      break;

    // Thunderstorm
    case code >= 95:
      animation = thunder;
      break;

    default:
      animation = cloudy;
  }

  return (
    <Lottie
      animationData={animation}
      loop
      autoplay
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default WeatherIcon;

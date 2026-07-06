import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiFog,
  WiSprinkle,
  WiRain,
  WiNightAltRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";
export const weatherDescription = (code, isDay = true) => {
  const dayWeather = {
    0: <><WiDaySunny size={30}/> Clear Sky</>,
    1: <><WiDayCloudy size={30}/> Mainly Clear</>,
    2: <><WiDayCloudy size={30}/> Partly Cloudy</>,
    3: <><WiCloud size={30}/> Overcast</>,
    45:<><WiFog size={30}/> Fog</>,
    48:<><WiFog size={30}/> Depositing Fog</>,
    51:<><WiSprinkle size={30}/> Light Drizzle</>,
    53:<><WiSprinkle size={30}/> Moderate Drizzle</>,
    55:<><WiSprinkle size={30}/> Heavy Drizzle</>,
    61:<><WiRain size={30}/> Light Rain</>,
    63:<><WiRain size={30}/> Moderate Rain</>,
    65:<><WiRain size={30}/> Heavy Rain</>,
    71:<><WiSnow size={30}/> Light Snow</>,
    73:<><WiSnow size={30}/> Moderate Snow</>,
    75:<><WiSnow size={30}/> Heavy Snow</>,
    80:<><WiRain size={30}/> Rain Showers</>,
    95:<><WiThunderstorm size={30}/> Thunderstorm</>,
  };

  const nightWeather = {
    0: <><WiNightClear size={30}/> Clear Night</>,
    1: <><WiNightAltCloudy size={30}/> Mainly Clear</>,
    2: <><WiNightAltCloudy size={30}/> Partly Cloudy</>,
    3: <><WiCloud size={30}/> Overcast</>,
    45: <><WiFog size={30}/> Fog</>,
    48: <><WiFog size={30}/> Dense Fog</>,
    51: <><WiSprinkle size={30}/> Light Drizzle</>,
    53: <><WiSprinkle size={30}/> Moderate Drizzle</>,
    55: <><WiSprinkle size={30}/> Heavy Drizzle</>,
    61: <><WiNightAltRain size={30}/> Light Rain</>,
    63: <><WiNightAltRain size={30}/> Moderate Rain</>,
    65: <><WiNightAltRain size={30}/> Heavy Rain</>,
    71: <><WiSnow size={30}/> Light Snow</>,
    73: <><WiSnow size={30}/> Moderate Snow</>,
    75: <><WiSnow size={30}/> Heavy Snow</>,
    80: <><WiNightAltRain size={30}/> Rain Showers</>,
    95: <><WiThunderstorm size={30}/> Thunderstorm</>,
  };

  return isDay
    ? dayWeather[code] || "Unknown"
    : nightWeather[code] || "Unknown";
};
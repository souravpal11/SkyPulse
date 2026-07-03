export const weatherDescription = (code) => {
  const weatherMap = {
    0: "☀️ Clear Sky",
    1: "🌤 Mainly Clear",
    2: "⛅ Partly Cloudy",
    3: "☁️ Overcast",
    45: "🌫 Fog",
    48: "🌫 Depositing Fog",
    51: "🌦 Light Drizzle",
    53: "🌦 Moderate Drizzle",
    55: "🌧 Heavy Drizzle",
    61: "🌧 Light Rain",
    63: "🌧 Moderate Rain",
    65: "🌧 Heavy Rain",
    71: "❄️ Light Snow",
    73: "❄️ Moderate Snow",
    75: "❄️ Heavy Snow",
    80: "🌦 Rain Showers",
    95: "⛈ Thunderstorm",
  };

  return weatherMap[code] || "Unknown";
};
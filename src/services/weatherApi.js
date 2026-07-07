import axios from "axios";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export const getCoordinates = async (city) => {
  const response = await axios.get(GEO_URL, {
    params: {
      name: city,
      count: 1,
    },
  });

  if (!response.data.results) {
    throw new Error("City not found");
  }

  return response.data.results[0];
};

export const getWeather = async (latitude, longitude) => {
  const response = await axios.get(WEATHER_URL, {
    params: {
      latitude,
      longitude,

      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "wind_speed_10m",
        "wind_direction_10m",
        "weather_code",
        "is_day",
        "visibility",
        "uv_index",
        "surface_pressure",
      ].join(","),

      hourly: [
        "temperature_2m",
        "weather_code",
        "precipitation_probability",
        "is_day",
      ].join(","),

      daily: [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "sunrise",
        "sunset",
        "precipitation_probability_max",

      ].join(","),

      timezone: "auto",
      forecast_days: 7,
    },
  });

  return response.data;
};

const AIR_QUALITY_URL = "https://air-quality-api.open-meteo.com/v1/air-quality";

export const getAirQuality = async (latitude, longitude) => {
  const response = await axios.get(AIR_QUALITY_URL, {
    params: {
      latitude,
      longitude,
      current: [
        "european_aqi",
        "pm2_5",
        "pm10",
        "carbon_monoxide",
        "nitrogen_dioxide",
        "ozone",
      ].join(","),
    },
  });

  return response.data.current;
};

export const SearchCitySuggestions = async (query) => {
  if (!query.trim()) return [];

  const response = await axios.get(GEO_URL, {
    params: {
      name: query,
      count: 5,
      language: "en",
      format: "json",
    },
  });

  return response.data.results || [];
};

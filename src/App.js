// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import CurrentWeather from "./components/CurrentWeather";
// import "./App.css";
// import Forecast from "./components/Forecast";
// import { background } from "./utils/background";
// import Loader from "./components/Loader";
// import WeatherDetails from "./components/WeatherDetails";
// import HourlyForecast from "./components/HourlyForecast";
// import SunriseSunset from "./components/SunriseSunset";
// import AirQuality from "./components/AirQuality";
// import Favorites from "./components/Favorites";
// import Footer from "./components/Footer";
// import WeatherMap from "./components/WeatherMap";

// import {
//   getCoordinates,
//   getWeather,
//   getAirQuality,
//   SearchCitySuggestions,
// } from "./services/weatherApi";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const [forecast, setForecast] = useState(null);
//   const [hourly, setHourly] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [air, setAir] = useState(null);
//   const [suggestions, setSuggestions] = useState([]);
//   const [favorites, setFavorites] = useState(() => {
//     return JSON.parse(localStorage.getItem("favorites")) || [];
//   });

//   const addFavorite = () => {
//     if (!weather) return;

//     if (!favorites.includes(weather.city)) {
//       const updated = [...favorites, weather.city];

//       setFavorites(updated);

//       localStorage.setItem("favorites", JSON.stringify(updated));
//     }
//   };

//   const removeFavorite = (city) => {
//     const updated = favorites.filter((item) => item !== city);

//     setFavorites(updated);

//     localStorage.setItem("favorites", JSON.stringify(updated));
//   };

//   const searchFavorite = (selectedCity) => {
//     setCity(selectedCity);

//     getCoordinates(selectedCity)
//       .then((location) =>
//         getWeather(location.latitude, location.longitude).then((data) => {
//           setWeather({
//             city: location.name,
//             country: location.country,
//             ...data.current,
//           });

//           setForecast(data.daily);
//           setHourly(data.hourly);
//         }),
//       )
//       .catch((err) => alert(err.message));
//   };

//   const getCurrentLocation = () => {
//     navigator.geolocation.getCurrentPosition(
//       async ({ coords }) => {
//         try {
//           setLoading(true);

//           const data = await getWeather(coords.latitude, coords.longitude);

//           const airData = await getAirQuality(
//             coords.latitude,
//             coords.longitude,
//           );

//           setAir(airData);

//           setWeather({
//             city: "Current Location",
//             country: "",
//             latitude: location.latitude,
//   longitude: location.longitude,
//             ...data.current,
//           });

//           setForecast(data.daily);
//           setHourly(data.hourly);
//         } catch {
//           alert("Unable to fetch weather.");
//         } finally {
//           setLoading(false);
//         }
//       },
//       () => alert("Location permission denied."),
//     );
//   };

//   const searchWeather = async (cityName = city) => {
//     if (!city.trim()) {
//       alert("Please enter a city.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const location = await getCoordinates(cityName);

//       const data = await getWeather(location.latitude, location.longitude);

//       const airData = await getAirQuality(
//         location.latitude,
//         location.longitude,
//       );

//       setAir(airData);

//       setWeather({
//         city: location.name,
//         country: location.country,
//         latitude: location.latitude,
//   longitude: location.longitude,
//         ...data.current,
//       });

//       setForecast(data.daily);
//       setHourly(data.hourly);
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   useEffect(() => {
//     if (weather) {
//       document.body.style.background = background(weather.weather_code);
//     }
//   }, [weather]);

//   useEffect(() => {
//     const timer = setTimeout(async () => {
//       if (city.trim().length >= 2) {
//         try {
//           const results = await SearchCitySuggestions(city);
//           setSuggestions(results);
//         } catch (err) {
//           console.log(err);
//         }
//       } else {
//         setSuggestions([]);
//       }
//     }, 400); // waits 400ms after typing

//     return () => clearTimeout(timer);
//   }, [city]);
//   return (
//     <>
//       <Navbar
//         city={city}
//         setCity={setCity}
//         searchWeather={searchWeather}
//         getCurrentLocation={getCurrentLocation}
//         suggestions={suggestions}
//         setSuggestions={setSuggestions}
//       />

//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <CurrentWeather weather={weather} />
//           <div className="text-center mt-3">
//             <button className="btn btn-warning" onClick={addFavorite}>
//               <i className="fa-regular fa-star"></i> Add to Favorites
//             </button>
//           </div>
//           <Favorites
//             favorites={favorites}
//             onSelect={searchFavorite}
//             onRemove={removeFavorite}
//           />
//           <WeatherDetails weather={weather} />
//           <HourlyForecast hourly={hourly} />
//           <Forecast forecast={forecast} />
//           <WeatherMap weather={weather} />
//           <SunriseSunset forecast={forecast} />
//           <AirQuality air={air} />
//         </>
//       )}
//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";
import "./App.css";
import Forecast from "./components/Forecast";
import { background } from "./utils/background";
import Loader from "./components/Loader";
import WeatherDetails from "./components/WeatherDetails";
import HourlyForecast from "./components/HourlyForecast";
import SunriseSunset from "./components/SunriseSunset";
import AirQuality from "./components/AirQuality";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import WeatherMap from "./components/WeatherMap";

import {
  getCoordinates,
  getWeather,
  getAirQuality,
  SearchCitySuggestions,
} from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [loading, setLoading] = useState(false);
  const [air, setAir] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // ---------------- FAVORITES ----------------

  const addFavorite = () => {
    if (!weather) return;

    if (!favorites.includes(weather.city)) {
      const updated = [...favorites, weather.city];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  const removeFavorite = (city) => {
    const updated = favorites.filter((item) => item !== city);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const searchFavorite = (selectedCity) => {
    setCity(selectedCity);

    getCoordinates(selectedCity)
      .then((locationData) =>
        getWeather(
          locationData.latitude,
          locationData.longitude
        ).then(async (data) => {
          const airData = await getAirQuality(
            locationData.latitude,
            locationData.longitude
          );

          setAir(airData);

          setWeather({
            city: locationData.name,
            country: locationData.country,
            latitude: locationData.latitude,
            longitude: locationData.longitude,
            ...data.current,
          });

          setForecast(data.daily);
          setHourly(data.hourly);
        })
      )
      .catch((err) => alert(err.message));
  };

  // ---------------- CURRENT LOCATION ----------------

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          setLoading(true);

          const data = await getWeather(
            coords.latitude,
            coords.longitude
          );

          const airData = await getAirQuality(
            coords.latitude,
            coords.longitude
          );

          setAir(airData);

          setWeather({
            city: "Current Location",
            country: "",
            latitude: coords.latitude,
            longitude: coords.longitude,
            ...data.current,
          });

          setForecast(data.daily);
          setHourly(data.hourly);
        } catch {
          alert("Unable to fetch weather.");
        } finally {
          setLoading(false);
        }
      },
      () => alert("Location permission denied.")
    );
  };

  // ---------------- SEARCH WEATHER ----------------

  const searchWeather = async (cityName = city) => {
    if (!cityName.trim()) {
      alert("Please enter a city.");
      return;
    }

    try {
      setLoading(true);

      const locationData = await getCoordinates(cityName);

      const data = await getWeather(
        locationData.latitude,
        locationData.longitude
      );

      const airData = await getAirQuality(
        locationData.latitude,
        locationData.longitude
      );

      setAir(airData);

      setWeather({
        city: locationData.name,
        country: locationData.country,
        latitude: locationData.latitude,
        longitude: locationData.longitude,
        ...data.current,
      });

      setForecast(data.daily);
      setHourly(data.hourly);

      setSuggestions([]);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ---------------- EFFECTS ----------------

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (weather) {
      document.body.style.background = background(
        weather.weather_code
      );
    }
  }, [weather]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (city.trim().length >= 2) {
        try {
          const results = await SearchCitySuggestions(city);
          setSuggestions(results);
        } catch (err) {
          console.log(err);
        }
      } else {
        setSuggestions([]);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [city]);

  // ---------------- UI ----------------

  return (
    <>
      <Navbar
        city={city}
        setCity={setCity}
        searchWeather={searchWeather}
        getCurrentLocation={getCurrentLocation}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />

      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather weather={weather} />

          <div className="text-center mt-3">
            <button
              className="btn btn-warning"
              onClick={addFavorite}
            >
              <i className="fa-regular fa-star"></i>{" "}
              Add to Favorites
            </button>
          </div>

          <Favorites
            favorites={favorites}
            onSelect={searchFavorite}
            onRemove={removeFavorite}
          />

          <WeatherDetails weather={weather} />

          <HourlyForecast hourly={hourly} />

          <Forecast
            forecast={forecast}
            hourly={hourly}
          />

          <WeatherMap weather={weather} />

          <SunriseSunset forecast={forecast} />

          <AirQuality air={air} />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
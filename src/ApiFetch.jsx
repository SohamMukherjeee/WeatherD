import { useEffect, useState } from "react";
import SearchBar from "./Row1/SearchBar";
import TimeBox from "./Row1/TimeBox";
import Temperature from "./Row2/Temperature";
import WindSpeed from "./Row2/WindSpeed";
import Humidity from "./Row2/Humidity";
import GraphWeather from "./Row2/GraphWeather";
import CardWeather from "./Row2/CardWeather";
import CityGrid from "./Row2/CityGrid";
import { SlLocationPin } from "react-icons/sl";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function ApiFetch() {
  const [city, setCity] = useState("Kolkata");
  const [weather, setWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [weatherRes, forecastRes] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
          ),
        ]);

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        if (weatherData.cod === 200) {
          setWeather(weatherData);
        } else {
          alert("City not found");
          return;
        }

        const reducedForecast = forecastData.list
          .filter((_, i) => i % 8 === 0)
          .map((item) => ({
            date: item.dt_txt.split(" ")[0],
            temp: item.main.temp,
          }));

        setForecastData(reducedForecast);
      } catch (error) {
        console.error("API Fetch Error:", error);
        alert("Failed to load weather data.");
      }
    };

    fetchData();
  }, [city]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F2F4F7]">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6 w-full bg-[#F9FAFB] shadow-sm border-b border-gray-200">
        {/* Time */}
        <div className="w-full sm:w-1/4">
          <TimeBox timezoneOffset={weather?.timezone} />
        </div>

        {/* Search */}
        <div className="w-full sm:w-2/4 flex justify-center items-center">
          <SearchBar onSearch={(newCity) => setCity(newCity)} />
        </div>

        {/* Location Display */}
        {weather && (
          <div className="w-full sm:w-1/4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start text-md font-semibold text-gray-800 gap-2">
              <SlLocationPin className="text-red-400" />
              {weather.name}
            </div>
          </div>
        )}
      </div>

      {/* Main Weather Section */}
      <div className="flex flex-col sm:flex-row justify-center items-start pt-7 gap-6 px-4 sm:px-0">
        {/* Left Panel */}
        <div className="w-full sm:w-3/4 flex flex-col items-center gap-6">
          {/* Weather Cards */}
          {weather && (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Temperature tempInput={weather.main.temp} />
              <WindSpeed windInput={weather.wind.speed} />
              <Humidity humidInput={weather.main.humidity} />
            </div>
          )}

          {/* Forecast Graph */}
          {forecastData.length > 0 && <GraphWeather data={forecastData} />}
        </div>

        {/* Right Panel – Suggested Cities */}
        <div className="w-full sm:w-1/4 flex flex-col justify-center pr-10">
          {weather && <CityGrid setCity={setCity} currentCity={city} />}
          {weather && <CardWeather city={weather.name} />}
        </div>
      </div>
    </div>
  );
}

export default ApiFetch;

import { useState } from "react";
import { FaCity } from "react-icons/fa";

const cities = [
  { name: "Kolkata", country: "India", timezone: "Asia/Kolkata" },
  { name: "New York", country: "USA", timezone: "America/New_York" },
  { name: "London", country: "UK", timezone: "Europe/London" },
  { name: "Tokyo", country: "Japan", timezone: "Asia/Tokyo" },
];

export default function CityGrid({ setCity, currentCity }) {
  const [currentTime, setCurrentTime] = useState("");

  const handleCityClick = (city) => {
    setCity(city.name);

    const time = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: city.timezone,
    }).format(new Date());

    setCurrentTime(time);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-7 gap-4">
      {cities.map((city) => {
        const isActive = currentCity === city.name;

        return (
          <button
            key={city.name}
            onClick={() => handleCityClick(city)}
            className={`h-30 w-40 flex justify-center items-start flex-col hover:cursor-pointer rounded-xl shadow transition px-5 py-4 border 
              ${
                isActive
                  ? "bg-[#F2F4F7] border-blue-400 shadow-lg"
                  : "bg-[#F9FAFB] border-gray-200 hover:shadow-md"
              }`}
          >
            <FaCity
              className={`h-10 w-10 rounded-xl p-2 mb-2 border 
                ${
                  isActive
                    ? "bg-blue-200 text-blue-800 border-blue-300"
                    : "bg-[#F2F4F7] text-[#5d6067] border-gray-300"
                }`}
            />
            <h2 className="text-sm text-[#9CA2B0] font-semibold">City</h2>
            <h1
              className={`text-lg font-bold ${
                isActive ? "text-blue-800" : "text-[#1F2937]"
              }`}
            >
              {city.name}
            </h1>
          </button>
        );
      })}
    </div>
  );
}

import { FaSearchLocation, FaClock, FaMapMarkedAlt } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineLeaderboard } from "react-icons/md";

const features = [
  {
    name: "Search Any City",
    ft: "Global weather search with instant results.",
    icon: <FaSearchLocation />,
  },
  {
    name: "Live Local Time",
    ft: "Time zone-based clock display.",
    icon: <FaClock />,
  },
  {
    name: "Clean Metric Cards",
    ft: "See temperature, wind, humidity at a glance.",
    icon: <TbTemperatureCelsius />,
  },
  {
    name: "Forecast Graphs",
    ft: "5-day trend predictions visualized",
    icon: <MdOutlineLeaderboard />,
  },
  {
    name: "Interactive Maps",
    ft: "View your city’s location instantly",
    icon: <FaMapMarkedAlt />,
  },
  {
    name: "Suggested Cities",
    ft: "Quick toggle between global cities",
    icon: <WiHumidity />,
  },
];

export default function Features() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1
          className="font-bold text-4xl text-gray-800 text-center pt-10"
          style={{ fontFamily: "Shadows Into Light, cursive" }}
        >
          Clime
        </h1>
        <h1
          className="text-2xl text-gray-400 pt-4 font-sans"
          style={{ fontFamily: "Shadows Into Light, cursive" }}
        >
          Made for You
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-10 mt-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="h-52 w-72 flex justify-start items-start flex-col bg-[#F9FAFB] border border-gray-200 rounded-xl shadow p-6 space-y-2"
            >
              <div className="bg-[#F2F4F7] h-12 w-12 rounded-xl border border-gray-300 text-[#5d6067] p-2 text-2xl flex items-center justify-center shadow">
                {feature.icon}
              </div>
              <h2
                className="text-sm text-[#1F2937] font-semibold"
                style={{ fontFamily: "Marcellus, sans-serif" }}
              >
                {feature.name}
              </h2>
              <p className="text-md font-bold text-[#9CA2B0]">{feature.ft}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

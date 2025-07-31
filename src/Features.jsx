import { FaSearchLocation, FaClock, FaMapMarkedAlt } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineLeaderboard } from "react-icons/md";
import BgPhoto from "./assets/Gemini_Generated_Image_ejmrxiejmrxiejmr.png";
const features = [
  {
    name: "Search Any City",
    ft: "Global weather with instant results.",
    icon: <FaSearchLocation />,
  },
  {
    name: "Live Local Time",
    ft: "Time zone-based clock display.",
    icon: <FaClock />,
  },
  {
    name: "Clean Metric Cards",
    ft: "See temperature, wind at a glance.",
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
      <div
        className="relative w-full min-h-screen flex justify-center items-center flex-col bg-cover bg-center px-4 sm:px-8"
        style={{
          backgroundImage: `url(${BgPhoto})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Optional gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30 sm:from-white/30 pointer-events-none z-0"></div>

        {/* Content wrapper with z-index to stay above gradient */}
        <div className="relative z-10 w-full">
          <h1
            className="font-bold text-4xl sm:text-5xl text-gray-800 text-center pt-8"
            style={{ fontFamily: "Shadows Into Light, cursive" }}
          >
            Clime
          </h1>
          <h1
            className="text-2xl sm:text-3xl text-gray-500 text-center pt-2 font-sans"
            style={{ fontFamily: "Shadows Into Light, cursive" }}
          >
            Made for You
          </h1>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center py-10 mt-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="w-[90%] sm:w-72 bg-white/60 border border-gray-200 rounded-xl shadow p-5 space-y-2 backdrop-blur-sm"
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
                <p className="text-sm text-[#6B7280]">{feature.ft}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

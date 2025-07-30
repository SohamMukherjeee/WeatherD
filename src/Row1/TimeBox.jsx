import { useState, useEffect } from "react";
import { TbClockHour9 } from "react-icons/tb";
import { AiOutlineInfoCircle } from "react-icons/ai";

function TimeBox({ timezoneOffset }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      const utcTime =
        new Date().getTime() + new Date().getTimezoneOffset() * 60000;
      const cityTime = new Date(utcTime + timezoneOffset * 1000);
      setTime(cityTime);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timezoneOffset]);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <>
      <div className=" rounded h-10 flex flex-row justify-center items-center gap-x-1">
        <TbClockHour9 /> {formattedTime}{" "}
        <div
          className="tooltip tooltip-bottom pl-1"
          data-tip="Local time at this place"
        >
          <AiOutlineInfoCircle className="text-gray-500 cursor-pointer text-sm" />
        </div>
      </div>
    </>
  );
}
export default TimeBox;

import { WiHumidity } from "react-icons/wi";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Humidity({ humidInput }) {
  return (
    <>
      <div className="h-50 w-80 flex justify-center items-center flex-col  bg-[#F9FAFB] border-gray text-3xl text-black rounded-xl shadow">
        <div className="self-start pl-10 space-y-2">
          <WiHumidity className="bg-[#F2F4F7] h-12 w-12 rounded-xl  border-gray-300 shadow text-sm text-[#5d6067] p-2" />
          <h1 className="text-sm text-[#9CA2B0] font-semibold">Humidity</h1>
          <div className="flex flex-row items-center">
            <h1 className="text-2xl font-bold">{humidInput}%</h1>
            <div
              className="tooltip tooltip-bottom pl-1"
              data-tip="Percentage of water vapor in the air compared to maximum possible at that temperature"
            >
              <AiOutlineInfoCircle className="text-gray-500 cursor-pointer text-sm" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Humidity;

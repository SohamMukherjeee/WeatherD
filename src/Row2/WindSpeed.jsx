import { LuWind } from "react-icons/lu";
function windSpeed({ windInput }) {
  return (
    <>
      <div className="h-50 w-80 flex justify-center items-center flex-col bg- bg-[#F9FAFB] border-grey  rounded-xl shadow">
        <div className="self-start pl-10 space-y-2">
          <LuWind className="bg-[#F2F4F7] h-12 w-12 rounded-xl  border-gray-300 shadow text-sm text-[#5d6067] p-2" />
          <h1 className="text-sm text-[#9CA2B0] font-semibold">Wind Speed</h1>
          <h1 className="text-2xl font-bold">{windInput} m/s</h1>
        </div>
      </div>
    </>
  );
}
export default windSpeed;

/*Percentage of water vapor in the air compared to maximum possible at that temperature*/

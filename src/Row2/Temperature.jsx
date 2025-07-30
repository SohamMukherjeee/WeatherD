import { TbTemperatureCelsius } from "react-icons/tb";

function Temperature({ tempInput }) {
  return (
    <>
      <div className="h-50 w-80 flex justify-center items-center flex-col bg-[#F9FAFB] border-grey  rounded-xl shadow">
        <div className="self-start pl-10 space-y-2">
          <TbTemperatureCelsius className="bg-[#F2F4F7] h-12 w-12 rounded-xl  border-gray-300 shadow text-sm text-[#5d6067] p-2" />
          <h1 className="text-sm text-[#9CA2B0] font-semibold">Temperature</h1>
          <h1 className="text-2xl font-bold">{tempInput} °C</h1>
        </div>
      </div>
    </>
  );
}
export default Temperature;

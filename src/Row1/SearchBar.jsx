import { useState } from "react";
function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity("");
    }
  };
  return (
    <>
      <div className=" flex  ">
        <form
          onClick={handleSubmit}
          className="flex justify-evenly items-center flex-row gap-x-10"
        >
          <input
            type="text"
            placeholder="Enter a city.."
            className="input w-40 sm:w-90"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button type="submit" className="btn btn-neutral hover:bg-[#B5C1C7]">
            submit
          </button>
        </form>
      </div>
    </>
  );
}
export default SearchBar;

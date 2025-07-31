import { VscArrowSmallRight } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen w-full  flex justify-center items-center flex-col bg-gradient-to-b from-white via-blue-100 to-blue-200 mt-10">
        <div className="h-[30vh] flex justify-center items-center">
          <h1 className=" text-gray-600 text-center">
            Plan Smarter with Clime
          </h1>
        </div>
        <div className="h-[70vh] w-full flex justify-center items-center">
          <div className="relative  bg-radial bg-[#F9FAFB]/30 border border-gray-200 shadow rounded-2xl w-[90vw] h-[60vh] mb-20 flex justify-center items-center flex-col">
            <p className="text-center text-gray-500 text-md sm:text-lg px-10">
              Get real time forecasts, hyperlocal weather insights at your
              fingertips. <br /> Whether you're heading out or staying in, Clime
              helps you stay ahead of the skies.
            </p>
            <button
              className="btn  bg-white text-black rounded-2xl mt-10 shadow-white hover:shadow-lg px-6 py-3 text-md font-semibold transition-all duration-300"
              onClick={() => navigate("/dashboard")}
            >
              View Dashboard{" "}
              <VscArrowSmallRight className="inline-block ml-2" />
            </button>
            <div className="absolute bottom-4 w-full flex justify-center">
              <span
                className="text-3xl text-gray-600"
                style={{ fontFamily: "Shadows Into Light, cursive" }}
              >
                Clime
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;

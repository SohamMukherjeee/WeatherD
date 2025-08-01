import img1 from "./assets/837_1x_shots_so.png";
import img2 from "./assets/icons8-sun-48.png";
import { VscArrowSmallRight } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full mb-10">
        <div className="bg-gradient-to-t from-white via-blue-200 to-blue-400 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center pt-20">
            <h1
              className="text-5xl font-bold text-gray-800 text-center py-4"
              style={{ fontFamily: "Marcellus, sans-serif" }}
            >
              Know Your city Better with
              <br />
              <img
                src={img2}
                alt=""
                srcset=""
                className="h-10 w-10 mb-4 inline"
              />
              <span
                className="pl-3 text-5xl"
                style={{ fontFamily: "Shadows Into Light, cursive" }}
              >
                Clime
              </span>
            </h1>
            <p className="text-sm sm:text-lg pt-10 text-center">
              Get real time temperature, humidity, wind speed brand forecast
              backed by <br /> interactive maps and powerful visuals.
            </p>
            <button
              className="btn  bg-white text-black rounded-2xl mt-10 shadow-white hover:shadow-lg px-6 py-3 text-md font-semibold transition-all duration-300"
              onClick={() => navigate("/dashboard")}
            >
              View Dashboard{" "}
              <VscArrowSmallRight className="inline-block ml-2" />
            </button>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={img1} alt="" srcset="" className="shadow-md" />
          </div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;

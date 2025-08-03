import img1 from "./assets/837_1x_shots_so.png";
import img2 from "./assets/icons8-sun-48.png";
import { VscArrowSmallRight } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full mb-10">
        <div className="bg-gradient-to-t from-white via-blue-200 to-blue-400 w-full overflow-hidden">
          <div className="flex flex-col items-center justify-center pt-20">
            <h1
              className="text-center py-6 px-4 text-gray-900"
              style={{ fontFamily: "Marcellus, serif" }}
            >
              <span className="block text-3xl md:text-4xl lg:text-5xl font-semibold">
                Know Your City Better With
              </span>

              <div className="mt-4 inline-flex items-center justify-center gap-2 relative">
                {/* Logo Image */}
                <img
                  src={img2}
                  alt="Clime logo"
                  className="h-10 w-10 md:h-12 md:w-12"
                />

                {/* "Clime" with SVG underline */}
                <span
                  className="relative text-4xl md:text-5xl lg:text-6xl text-black"
                  style={{ fontFamily: "Shadows Into Light, cursive" }}
                >
                  Clime
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="14"
                    viewBox="0 0 230 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 10C30 2 115 -2 228 9"
                      stroke="black"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </h1>
            <p className="text-center text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto pt-4 px-4">
              Get realtime temperature, humidity and wind updates. All brought
              to life with beautifully interactive weather maps.
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

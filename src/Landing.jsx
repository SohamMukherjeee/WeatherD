import LandingPage from "./LandingPage";
import Features from "./Features";
import Footer from "./Footer";
function Landing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <LandingPage />
        <Features />
        <Footer />
      </div>
    </>
  );
}
export default Landing;

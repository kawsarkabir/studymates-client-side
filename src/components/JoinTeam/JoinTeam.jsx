import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
const JoinTeam = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-red-50 mt-8 p-14">
      <div data-aos="fade-right" className="max-w-screen-xl mx-auto p-14 text-center">
        <h1 className="font-extrabold text-3xl mt-2">
          What are you waiting for ? <br />
          Join the study team!
        </h1>
        <button className="btn bg-[#FF6F61] px-10 font-bold my-3 text-white">
          Go To App
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;

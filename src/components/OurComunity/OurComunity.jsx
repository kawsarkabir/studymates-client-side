import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
const OurComunity = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-right" className="max-w-screen-xl mx-auto my-20 text-center p-4">
      <h1 className="text-2xl lg:text-4xl md:text-3xl">
        Our <span className="font-bold">student community</span> is{" "}
        <span className="font-bold">more than one million </span> strong
      </h1>
      <h2 className="text-2xl lg:text-4xl md:text-3xl">
        (and this is just the beginning)
      </h2>
      <div className="grid grid-cols-2 justify-items-center gap-5 lg:grid-cols-5 md:grid-cols-2 mt-10 mb-20">
        <div className="text-[#9656A1]">
          <h1 className="font-extrabold lg:text-7xl text-4xl md:text-6xl">
            +1M
          </h1>
          <p>community member</p>
        </div>
        <div className="text-[#9656A1]">
          <h1 className="font-extrabold lg:text-7xl text-4xl md:text-6xl">
            +19M
          </h1>
          <p>study sessions</p>
        </div>
        <div className="text-[#9656A1]">
          <h1 className="font-extrabold lg:text-7xl text-4xl md:text-6xl">
            +4M
          </h1>
          <p>study goals reached</p>
        </div>
        <div className="text-[#9656A1]">
          <h1 className="font-extrabold lg:text-7xl text-4xl md:text-6xl">
            +250
          </h1>
          <p>countries</p>
        </div>
        <div className="text-[#9656A1]">
          <h1 className="font-extrabold lg:text-7xl text-4xl md:text-6xl">
            +4.8/5
          </h1>
          <p>positive reviews</p>
        </div>
      </div>
    </div>
  );
};

export default OurComunity;

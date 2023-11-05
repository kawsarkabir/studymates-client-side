import Typed from "react-typed";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="fade-down" className="max-w-screen-xl mx-auto flex flex-col justify-center items-center h-[75vh]">
      <h1 className="lg:text-7xl text-4xl md:text-6xl font-bold my-3">
        Welcome to your
      </h1>
      <div className="animated-typing">
        <Typed
          className="lg:text-7xl text-4xl font-bold md:text-6xl"
          strings={["Virtual Study Hall", "Virtual Cafe", "Virtual Workspace"]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
      <div className="text-center">
        <p className="text-xl leading-6 my-8 w-2/3 mx-auto ">
          StudyMates is the new way to connect and focus with other students
          from all over the world
        </p>
        <p>
          <span className="rounded-3xl p-2 px-4 border">
            <i className="fa-solid fa-circle text-green-400"></i> 1225 Students
            Online Now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Banner;

import { useEffect, useState } from "react";
import DisplayFeature from "./DisplayFeature";
import "aos/dist/aos.css";
import Aos from "aos";

const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-5xl font-extrabold text-center">
        Discover Study Mates
      </h1>
      <div data-aos="fade-down" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10">
        {features?.map((feature) => (
          <DisplayFeature key={feature.id} feature={feature}></DisplayFeature>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-wide bg-[#FF6F61] text-white font-bold transform-none">Ready ? Try is out!</button>
      </div>
    </div>
  );
};

export default Features;

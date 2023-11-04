import { useEffect, useState } from "react";
import DisplayFeature from "./DisplayFeature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-5xl font-extrabold text-center">Discover Study Mates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10">
        {features?.map((feature) => (
          <DisplayFeature key={feature.id} feature={feature}></DisplayFeature>
        ))}
      </div>
    </div>
  );
};

export default Features;

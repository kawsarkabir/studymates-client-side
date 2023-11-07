import { useLoaderData } from "react-router-dom";
import DisplayAssingment from "./DisplayAssingment";
import { useEffect, useState } from "react";

const AllAssingment = () => {
  const loadingAssingments = useLoaderData();

  const [assingment, setAssingment] = useState([]);
  const [level, setLevel] = useState("default");

  const handleChange = (e) => {
    setLevel(e.target.value);
  };

  useEffect(() => {
    if (level === "default") {
      setAssingment(loadingAssingments);
    } else {
      const filtered = loadingAssingments.filter(
        (item) => item.difficultyLevel === level
      );
      setAssingment(filtered);
      console.log(filtered);
    }
  }, [level, loadingAssingments]);

  return (
    <div className="max-w-screen-xl mx-auto mb-10 p-4">
      <div className="flex items-center gap-x-2">
        <h1 className="text-3xl font-extrabold my-10">
          Filtering By Difecult Level
        </h1>
        <select
          onChange={handleChange}
          name="difficultyLevel"
          className="select select-bordered max-w-xs"
        >
          <option disabled selected>
            Filter
          </option>
          <option value={"Easy"}>Easy</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Hard"}>Hard</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 gap-y-10">
        {assingment?.map((SingleAssingment) => (
          <DisplayAssingment
            key={SingleAssingment._id}
            SingleAssingment={SingleAssingment}
          ></DisplayAssingment>
        ))}
      </div>
    </div>
  );
};

export default AllAssingment;
